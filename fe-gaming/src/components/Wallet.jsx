import React from 'react';

const Wallet = () => {
  return (
    <div className="p-4">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">My Wallet</h2>
        
        <div className="bg-gray-700 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Total Balance:</span>
            <div className="flex items-center mr-2">
              <img
                src="/assets/coins-won.svg"
                alt="Coins"
                className="w-5 h-5 mr-1"
              />
              <span className="text-white font-bold text-lg">10</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg">
            Purchase Coins
          </button>
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg">
            Withdraw
          </button>
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg">
            Transaction History
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;