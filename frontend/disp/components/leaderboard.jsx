import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const LeaderboardProgressBar = ({ players }) => {
  // Sort players by score in descending order
  const sortedPlayers = [...players].sort(
    (a, b) => b.result.words - a.result.words
  );

  return (
    <div className="p-4 text-white text-xl font-bold my-full-w">
      {sortedPlayers.map((player, index) => (
        <div key={player.id} className="mb-2">
          <div className="flex justify-between pr-6">
            <span className="font-bold mb-3 font-mono">{player.name}</span>
            <span className="text-2xl font-mono">{player.result.words}</span>
          </div>
          <ProgressBar
            now={player.result.words}
            max={sortedPlayers[0].result.words}
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
