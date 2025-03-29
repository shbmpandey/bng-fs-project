import toast from 'react-hot-toast';

const API_URL = "http://localhost:8080";
let expirationTimer;
let tokenMonitorInterval;

const decodeToken = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const isTokenExpired = (token) => {
  if (!token) return true;
  const decoded = decodeToken(token);
  if (!decoded?.exp) return true;
  return decoded.exp * 1000 < Date.now();
};

export async function login(email, password) {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    if (!data.success) {
      throw new Error(data.message || "Authentication failed");
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("userId", data.user.id);  // 🔹 Store user ID separately
    scheduleTokenExpirationCheck(data.token);
    
    toast.success(`Welcome back, ${data.user.fullName || data.user.email}!`);
    
    return { 
      success: true, 
      user: data.user, 
      token: data.token,
      expiresIn: getTokenExpiration(data.token) - Date.now()
    };
  } catch (error) {
    return { 
      success: false, 
      message: error.message || "An unknown error occurred" 
    };
  }
}

export async function signup(fullName, email, password, confirmPassword) {
  try {
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password }),
    });

    const data = await response.json();
    
    if (!response.ok || !data.success) {
      throw new Error(data.message || "Registration failed");
    }

    toast.success('Account created successfully! Please log in.');
    return { 
      success: true,
      user: data.user,
      message: data.message 
    };
  } catch (error) {
    return { 
      success: false, 
      message: error.message || "An unknown error occurred" 
    };
  }
}

export function getTokenExpiration(token) {
  const decoded = decodeToken(token);
  return decoded?.exp ? decoded.exp * 1000 : null;
}

function scheduleTokenExpirationCheck(token) {
  clearTimeout(expirationTimer);
  
  const expirationTime = getTokenExpiration(token);
  if (!expirationTime) return;

  const timeUntilExpiration = expirationTime - Date.now();
  
  if (timeUntilExpiration > 0) {
    expirationTimer = setTimeout(() => {
      logout(true);
    }, timeUntilExpiration);
  } else {
    logout(true);
  }
}

export function logout(isAutoLogout = false) {
  clearTimeout(expirationTimer);
  stopTokenMonitor();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userId"); // 🔹 Remove user ID on logout
  
  if (isAutoLogout) {
    toast.error('Your session has expired. Please log in again.');
  } else {
    toast.success('Logged out successfully');
  }
  
  window.location.href = "/login";
}

export function isAuthenticated() {
  const token = localStorage.getItem("token");
  return !!token && !isTokenExpired(token);
}

export function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// 🔹 New function to get only user ID
export function getUserId() {
  return localStorage.getItem("userId") || null;
}

export function getAuthHeader() {
  const token = localStorage.getItem("token");
  if (!token || isTokenExpired(token)) {
    logout(true);
    return {};
  }
  return { 'Authorization': `Bearer ${token}` };
}

export function startTokenMonitor(interval = 30000) {
  stopTokenMonitor();
  tokenMonitorInterval = setInterval(() => {
    const token = localStorage.getItem("token");
    if (token && isTokenExpired(token)) {
      logout(true);
    }
  }, interval);
}

export function stopTokenMonitor() {
  if (tokenMonitorInterval) {
    clearInterval(tokenMonitorInterval);
  }
}

if (typeof window !== 'undefined') {
  startTokenMonitor();
}
