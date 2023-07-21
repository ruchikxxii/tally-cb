// pages/index.js

import React from "react";
import LeaderboardProgressBar from "../components/leaderboard";

const Home = () => {
  const players = [
    { id: 1, name: "Player 1", score: 90 },
    { id: 2, name: "Player 2", score: 70 },
    { id: 3, name: "Player 3", score: 50 },
    // Add more players as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <LeaderboardProgressBar players={players} />
    </div>
  );
};

export default Home;
