import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';

const API_URL = "http://localhost:8080";
const BattleArena = () => {
  const [arenaData, setArenaData] = useState({
    coins: 0,
    upcomingMatches: 0,
    totalMatches: 0,
    imageLink: "",
  });

  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/contest/battle_arena`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.length > 0) {
          setArenaData({
            coins: data[0].coins,
            upcomingMatches: data[0].upcomingMatches,
            totalMatches: data[0].totalMatches,
            imageLink: data[0].imageLink,
          });
        }
      } catch (error) {
        console.error("Error fetching battle arena data:", error);
        setImageError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewMatches = async () => {
    setButtonLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(
        <div>
          <div className="font-bold">Matches Loaded Successfully!</div>
          <div className="text-sm">
            Showing {arenaData.upcomingMatches} upcoming matches with {arenaData.coins.toLocaleString()} coins at stake
          </div>
        </div>,
        {
          position: "top-center",
          
        }
      );
    } catch (error) {
      toast.error(
        <div>
          <div className="font-bold">Failed to Load Matches</div>
          <div className="text-sm">Please check your connection and try again</div>
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          theme: "dark"
        }
      );
    } finally {
      setButtonLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-0 mx-3">
        <div className="flex justify-between items-center mb-2">
          <div className="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 w-20 bg-gray-700 rounded animate-pulse"></div>
        </div>

        <div className="relative mt-2 w-full h-48 rounded-xl overflow-hidden bg-gray-700 animate-pulse">
          <div className="absolute inset-0 bg-black/40 p-1 flex flex-col justify-end">
            <div className="p-0">
              <div className="flex justify-between">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
                    <div className="h-6 w-16 bg-gray-600 rounded"></div>
                  </div>
                  <div className="h-3 w-24 mx-auto mt-1 bg-gray-600 rounded"></div>
                </div>

                <div className="h-12 w-px bg-gray-600"></div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
                    <div className="h-6 w-8 bg-gray-600 rounded"></div>
                  </div>
                  <div className="h-3 w-20 mx-auto mt-1 bg-gray-600 rounded"></div>
                </div>

                <div className="h-12 w-px bg-gray-600"></div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
                    <div className="h-6 w-12 bg-gray-600 rounded"></div>
                  </div>
                  <div className="h-3 w-24 mx-auto mt-1 bg-gray-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-2 mb-2 bg-gray-700 h-12 rounded-lg animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="mt-0 mx-3">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-white">Battle Arena</h2>
        <button 
          onClick={() => console.log('View All clicked')} 
          className="text-white text-sm font-medium no-underline hover:text-orange-400 transition-colors bg-transparent border-none cursor-pointer"
        >
          View All &gt;
        </button>
      </div>

      <div className="relative mt-2 w-full h-48 rounded-xl overflow-hidden group">
        <img
          src={imageError ? "/assets/battle-arena.jpeg" : arenaData.imageLink}
          alt="Battle Arena"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={() => setImageError(true)}
        />

        <div className="absolute inset-0 bg-black/40 p-1 flex flex-col justify-end group-hover:bg-black/30 transition-all duration-300">
          <div className="p-0">
            <div className="flex justify-between">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <img
                    src="/assets/coin.png"
                    alt="coin"
                    className="w-5 h-5"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <span className="text-white font-bold text-lg">
                    {arenaData.coins.toLocaleString()}
                  </span>
                </div>
                <span className="text-gray-300 text-xs">Worth of stakes this month</span>
              </div>

              <div className="h-12 w-px border-l-2 border-dotted border-orange-300"></div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <img
                    src="/assets/sword.png"
                    alt="sword"
                    className="w-5 h-5"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <span className="text-white font-bold text-lg">
                    {arenaData.upcomingMatches}
                  </span>
                </div>
                <span className="text-gray-300 text-xs">Upcoming Matches</span>
              </div>

              <div className="h-12 w-px border-l-2 border-dotted border-orange-300"></div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <img
                    src="/assets/remote.png"
                    alt="remote"
                    className="w-5 h-5"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <span className="text-white font-bold text-lg">{arenaData.totalMatches}</span>
                </div>
                <span className="text-gray-300 text-xs">Total Matches Played</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={handleViewMatches}
        disabled={buttonLoading}
        className={`w-full mt-2 mb-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center ${
          buttonLoading ? 'opacity-80 cursor-not-allowed' : ''
        }`}
      >
        {buttonLoading ? (
         <>
            <FaSpinner className="animate-spin text-lg" />
            <span className="text-sm font-bold ml-2">Loading matches..</span>
          </>
        ) : (
          'VIEW MATCHES'
        )}
      </button>
    </div>
  );
};

export default BattleArena;