import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';

import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../utils/auth';

function Signup() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await signup(
                formData.fullName,
                formData.email,
                formData.password,
                formData.confirmPassword
            );
            
            if (response.success) {
                navigate('/login');
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
        <div className="pt-16 pb-16 px-4 flex items-center justify-center">
            <div className="w-full bg-gray-800/90 rounded-xl p-6 shadow-xl">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">Create Account</h1>
                
                {error && (
                    <div className="bg-red-900/30 text-red-300 p-3 rounded-lg mb-4 text-sm shadow-md">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiUser className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="w-full pl-10 pr-4 py-3 bg-gray-700/80 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full pl-10 pr-4 py-3 bg-gray-700/80 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiLock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-10 py-3 bg-gray-700/80 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-400"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiLock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full pl-10 pr-10 py-3 bg-gray-700/80 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-400"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center text-sm"
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="animate-spin text-lg" />
                                <span className="text-sm font-bold ml-2">Signing up..</span>
                            </>
                        ) : 'Sign Up'}
                    </button>

                    <p className="text-gray-400 text-center mt-4 text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;