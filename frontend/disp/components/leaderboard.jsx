import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const LeaderboardProgressBar = ({ players }) => {
  // Sort players by score in descending order
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="p-4 text-white text-xl font-bold">
      {sortedPlayers.map((player, index) => (
        <div key={player.id} className="mb-2">
          <div className="flex justify-between pr-6">
            <span className="font-bold mb-3 font-mono">{player.name}</span>
            <span className="text-2xl font-mono">{player.score}</span>
          </div>
          <ProgressBar
            now={player.score}
            max={sortedPlayers[0].score}
            min={0}
            variant="info"
            animated
          />
        </div>
      ))}
    </div>
  );
};

export default LeaderboardProgressBar;
