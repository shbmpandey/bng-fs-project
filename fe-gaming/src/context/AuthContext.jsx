import { createContext, useContext, useState, useEffect } from 'react';
import { 
  isAuthenticated, 
  login as authLogin, 
  logout as authLogout,
  getCurrentUser,
  startTokenMonitor,
  stopTokenMonitor
} from '../utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(isAuthenticated());
  const [user, setUser] = useState(getCurrentUser());
  const [sessionTimeLeft, setSessionTimeLeft] = useState(0);

  useEffect(() => {
    startTokenMonitor();
    updateSessionTime();
    const interval = setInterval(updateSessionTime, 1000);
    
    return () => {
      stopTokenMonitor();
      clearInterval(interval);
    };
  }, []);

  const updateSessionTime = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      const timeLeft = decoded.exp * 1000 - Date.now();
      setSessionTimeLeft(Math.max(0, timeLeft));
    } else {
      setSessionTimeLeft(0);
    }
  };

  const handleLogin = async (email, password) => {
    const response = await authLogin(email, password);
    if (response.success) {
      setAuth(true);
      setUser(getCurrentUser());
    }
    return response;
  };

  const handleLogout = () => {
    authLogout();
    setAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      auth, 
      user,
      sessionTimeLeft,
      handleLogin, 
      handleLogout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);