import React from "react";
import ChampionStat from "./ChampionStat";

const ChampionStats = ({ stats }) => {
  return (
    <div className="p-6 border-t border-gray-700">
      <h2 className="text-xl font-bold text-white mb-4">Stats</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <ChampionStat key={stat.name} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default ChampionStats;
