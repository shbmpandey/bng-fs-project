import React from 'react';
import TrendingSection from '../components/TrendingSection';
import GameCard from '../components/GameCard';
import BattleArena from '../components/BattleArena';

function Home() {
  return (
    <>
      <TrendingSection />
      <GameCard />
      <BattleArena />
    </>
  );
}

export default Home;