import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth, AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Games from './pages/Games';
import WalletPage from './pages/WalletPage';
import MyAccountPage from './pages/MyAccountPage';

function AppRoutes() {
  const { auth } = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={auth ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/signup" element={auth ? <Navigate to="/" replace /> : <Signup />} />
        <Route path="/games" element={auth ? <Games /> : <Navigate to="/login" replace />} />
        <Route path="/wallet" element={auth ? <WalletPage /> : <Navigate to="/login" replace />} />
        <Route path="/profile" element={auth ? <MyAccountPage /> : <Navigate to="/login" replace />} />
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login" replace />} />

      </Route>
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;