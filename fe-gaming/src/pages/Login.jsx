import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiMail, FiLock } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await handleLogin(formData.email, formData.password);
      
      if (response.success) {
        // Navigation is handled by auth context after successful login
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="pt-16 pb-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-xs">
        <div className="bg-gray-800/90 rounded-xl p-6 shadow-lg border border-gray-700/30">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-1">Welcome Back</h1>
            <p className="text-gray-400 text-sm">Sign in to access your account</p>
          </div>

          {error && (
            <div className="bg-red-900/30 text-red-300 px-3 py-2 rounded-lg mb-4 text-xs border border-red-800/50">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-4 w-4 text-gray-500" />
                </div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="w-full pl-9 pr-9 py-2.5 text-sm bg-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-transparent"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium py-2.5 px-4 rounded-lg shadow hover:shadow-orange-500/20 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                    <FaSpinner className="animate-spin text-lg" />
                    <span className="text-sm font-bold ml-2">Signing in..</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>

            <div className="text-center pt-2">
              <p className="text-gray-400 text-xs">
                Don't have an account?{' '}
                <Link to="/signup" className="text-orange-400 hover:text-orange-300 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;