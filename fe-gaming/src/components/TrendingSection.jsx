import React, { useState, useEffect } from 'react';
import { FaPlay, FaSpinner } from 'react-icons/fa';
import {toast} from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';


const API_URL = "http://localhost:8080";
const TrendingSection = () => {
  const [trendingGame, setTrendingGame] = useState({
    title: '',
    coins: 0,
    liveUsers: 0,
    imageLink: ''
  });
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/games`);
        const data = await response.json();
        const topTrending = data.find(game => game.trendingNo === 1);
        if (topTrending) {
          setTrendingGame({
            title: topTrending.title,
            coins: topTrending.coins,
            liveUsers: topTrending.liveUsers,
            imageLink: topTrending.imageLink
          });
        }
      } catch (error) {
        console.error('Error fetching trending data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
      toast.success(
        <div className="flex flex-col">
          <span className="font-bold text-lg">Game Started!</span>
          <span className="text-sm">Enjoy playing {trendingGame.title}</span>
        </div>, 
        {
          position: "top-center",
        }
      );
    }, 1500);
  };

  if (loading) {
    return (
      //added skeleton loading effect for tending section
      <div className="grid grid-cols-1 gap-4 px-3">
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg bg-gray-700 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% to-black/90 to-90% p-4 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
              <div className="h-7 w-40 bg-gray-500 rounded"></div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
                <div className="h-5 w-16 bg-gray-500 rounded"></div>
              </div>
              
              <div className="flex items-center gap-1 bg-gray-300 py-2 px-2 rounded-lg">
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                <div className="h-5 w-20 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    //Acctual trending section
    <div className="grid grid-cols-1 gap-4 px-3">
      <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg">
        <img
          src={imageError ? '/assets/Guns_Bottles.png' : trendingGame.imageLink}
          alt={trendingGame.title}  
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% to-black/90 to-90% p-4 flex flex-col justify-end">
          
          <div className="flex items-center gap-2 mb-2">
            <img 
              src="/assets/coins-won.svg" 
              alt="coin" 
              className="w-6 h-6"
              onError={(e) => e.target.style.display = 'none'}
            />
            <div>
              <div className="text-2xl font-bold text-white">
                {trendingGame.coins.toLocaleString()}  
                <span className="text-sm text-gray-300"> Won this week</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              <img 
                src="/assets/user_live_icon.svg" 
                alt="live users" 
                className="w-7 h-7"
                onError={(e) => e.target.style.display = 'none'}
              />
              <span className="text-white text-sm font-medium">
                {trendingGame.liveUsers.toLocaleString()} <br />
                <span className="text-white text-xs font-small">live users</span>
              </span>
            </div>
            
            <button 
              onClick={handlePlayClick}
              disabled={isPlaying}
              className={`flex items-center gap-1 ${
                isPlaying 
                  ? 'bg-gray-300 text-gray-500' 
                  : 'bg-white hover:bg-gray-100 text-orange-500'
              } font-small py-2 px-4 rounded-lg transition-all duration-200`}
            >
              {isPlaying ? (
                <>
                  <FaSpinner className="animate-spin text-lg" />
                  <span className="text-sm font-bold ml-2">Matching...</span>
                </>
              ) : (
                <>
                  <FaPlay className="text-orange-400 text-lg" />
                  <span className="text-lg font-bold text-orange-400">PLAY NOW</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;