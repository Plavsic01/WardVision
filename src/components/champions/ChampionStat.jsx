import React from "react";

const ChampionStat = ({ stat }) => {
  return (
    <div className="bg-[#2a2a3a] p-3 rounded-lg">
      <p className="text-gray-400 text-sm">{stat.name}</p>
      <p className="text-white font-medium">
        {stat.value}{" "}
        <span className={`${stat.perLvl ? "visible" : "hidden"}`}>
          (+{stat.perLvl})
        </span>
      </p>
    </div>
  );
};

export default ChampionStat;
