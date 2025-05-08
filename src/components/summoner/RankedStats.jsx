import React from "react";

const RankedStats = ({
  queueType,
  tier,
  rank,
  wins,
  losses,
  leaguePoints,
  winrate,
  isFetching,
}) => {
  return (
    <section
      className={`text-white text-sm font-light mt-1.5 bg-[#31313C] md:w-100 md:h-40 md:rounded-md transition duration-500 ${
        isFetching ? " blur-xs" : ""
      }`}
    >
      <h2 className="p-2 font-medium">{queueType}</h2>
      <div className="flex items-center">
        <div className="p-2">
          <img
            src={`${import.meta.env.VITE_API_URL}/api/ranked/icon/${tier}`}
            className="rounded-full bg-[#282830] p-1 mt-2"
            alt="ranked-icon"
            style={{ color: "transparent", width: "70px" }}
          />
        </div>
        <div className="flex justify-between items-center flex-grow px-3 text-xs">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">
              {tier} {rank}
            </h2>
            <p className="text-[#9E9EB1]">{leaguePoints}</p>
          </div>

          <div className="text-[#7B7A8E] flex flex-col gap-2">
            <h2>
              {wins} {losses}
            </h2>
            <p>Win rate: {winrate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankedStats;
