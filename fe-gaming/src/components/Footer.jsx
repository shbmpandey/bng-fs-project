import React from 'react';
import { FaHome, FaWallet, FaUser } from 'react-icons/fa';
import { MdGames } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/games') return 'games';
    if (path === '/wallet') return 'wallet';
    if (path === '/profile') return 'profile';
    return '';
  };

  const activeTab = getActiveTab();

  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[375px] h-16 bg-gray-900 flex items-center border-t border-gray-700 z-50 px-4">
      <div 
        className="flex-1 flex flex-col items-center justify-center group cursor-pointer"
        onClick={() => navigate('/')}
      >
        <div className={`p-2 mb-1 rounded-full transition-all duration-200 ${
          activeTab === 'home' 
            ? 'bg-orange-400' 
            : 'group-hover:bg-gray-800'
        }`}>
          <FaHome className={`text-lg ${
            activeTab === 'home' 
              ? 'text-white' 
              : 'text-gray-400 group-hover:text-white'
          }`} />
        </div>
      </div>

      <div 
        className="flex-1 flex flex-col items-center justify-center group cursor-pointer"
        onClick={() => navigate('/games')}
      >
        <div className={`p-2 mb-1 rounded-full transition-all duration-200 ${
          activeTab === 'games' 
            ? 'bg-orange-400' 
            : 'group-hover:bg-gray-800'
        }`}>
          <MdGames className={`text-lg ${
            activeTab === 'games' 
              ? 'text-white' 
              : 'text-gray-400 group-hover:text-white'
          }`} />
        </div>
      </div>

      <div 
        className="flex-1 flex flex-col items-center justify-center group cursor-pointer"
        onClick={() => navigate('/wallet')}
      >
        <div className={`p-2 mb-1 rounded-full transition-all duration-200 ${
          activeTab === 'wallet' 
            ? 'bg-orange-400' 
            : 'group-hover:bg-gray-800'
        }`}>
          <FaWallet className={`text-lg ${
            activeTab === 'wallet' 
              ? 'text-white' 
              : 'text-gray-400 group-hover:text-white'
          }`} />
        </div>
      </div>

      <div 
        className="flex-1 flex flex-col items-center justify-center group cursor-pointer"
        onClick={() => navigate('/profile')}
      >
        <div className={`p-2 mb-1 rounded-full transition-all duration-200 ${
          activeTab === 'profile' 
            ? 'bg-orange-400' 
            : 'group-hover:bg-gray-800'
        }`}>
          <FaUser className={`text-lg ${
            activeTab === 'profile' 
              ? 'text-white' 
              : 'text-gray-400 group-hover:text-white'
          }`} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;