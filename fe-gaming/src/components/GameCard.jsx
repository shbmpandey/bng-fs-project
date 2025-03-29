import React, { useState, useEffect } from "react";
import gamesData from "../data/gamesData"; 

const GameCard = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Filter games with trendingNo >= 2 and show only 6
        const trendingGames = gamesData
          .filter((game) => game.trendingNo >= 2)
          .sort((a, b) => a.trendingNo - b.trendingNo)
          .slice(0, 6)
          .map((game) => ({
            title: game.title,
            image: game.imageLink,
            amount: game.coins.toLocaleString(),
            online: game.liveUsers.toLocaleString(),
            fallback: "/assets/default-game.jpeg",
          }));

        setGames(trendingGames);
      } catch (error) {
        console.error("Error fetching game data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3 px-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-lg bg-gray-700 animate-pulse"
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-xl px-1 py-2">
              <div className="flex justify-between items-center">
                <div className="h-4 w-16 bg-gray-500 rounded"></div>
                <div className="h-4 w-16 bg-gray-500 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 px-3">
      {games.map((game, index) => (
        <div
          key={index}
          className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl group"
        >
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = game.fallback;
            }}
          />

          {/* Semi-transparent overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />

          <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-xl px-1 py-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-0.5">
                <img
                  src="/assets/coins-won.svg"
                  alt="coin"
                  className="w-4 h-4"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <span className="text-white text-xs font-bold tracking-tight">
                  {game.amount}
                </span>
              </div>

              <div className="flex items-center gap-0.5 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                <img
                  src="/assets/user_live_icon.svg"
                  alt="live users"
                  className="w-4 h-4"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <span className="text-white text-xs">{game.online}</span>
              </div>
            </div>
          </div>

          {/* Play button that appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full flex items-center gap-1">
              <span>Play Now</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
