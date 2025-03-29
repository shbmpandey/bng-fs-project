import React from 'react';
import { FaWallet, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

const Header = () => {
  const loggedIn = isAuthenticated();

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[375px] bg-transparent backdrop-blur-xl px-3 py-3 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button className="text-white text-xl leading-none p-0 cursor-pointer">☰</button>
          <div className="flex items-center gap-1">
            <div className="relative">
              <img
                src="/assets/avatar.png"
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <span className="text-white font-semibold text-xs">
              {/* user logged in then show username else game app name this is static as of now */}
              {loggedIn ? 'MOB99100N' : 'MobiWar'}
            </span>
          </div>
        </div>

        {/* Here im conditionaly checking if user is logged in then show wallet and if not login show sign button */}
        {loggedIn ? (
          <div className="flex items-center bg-green-600 rounded-full px-2 py-1 min-w-[100px]">
            <FaWallet className="text-white text-base mr-2" />
            <div className="flex items-center mr-2">
              <img
                src="/assets/coins-won.svg"
                alt="Coins"
                className="w-4 h-4 mr-1"
              />
              <span className="text-white font-bold text-sm">10</span>
            </div>
            <div className="w-px h-5 bg-white mr-1.5" />
            <button className="p-0 flex items-center">
              <FaPlus className="text-white text-xs" />
            </button>
          </div>
        ) : (
          <Link 
            to="/login" 
            className="bg-orange-500 hover:bg-orange-600 no-underline text-white font-semibold text-xs px-3 py-1.5 rounded-full transition-all"
          >
            Log In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;