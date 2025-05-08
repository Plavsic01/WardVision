import React from "react";

const SummonerDetails = ({ name, tag, level, icon, region }) => {
  return (
    <section className="flex w-screen items-center gap-5 p-5 bg-[#31313C] md:h-50 lg:justify-center lg:pr-150">
      <div className="relative">
        <img
          className="size-17 md:size-28 rounded-2xl"
          src={`https://ddragon.leagueoflegends.com/cdn/15.8.1/img/profileicon/${icon}.png`}
          alt="profile-icon"
        />
        <span className="absolute top-15 left-5 md:top-26 md:left-10 bg-[#202D37] rounded-lg text-white text-xs px-1">
          {level}
        </span>
      </div>

      <div className="flex flex-col justify-center text-white">
        <h2 className="text-lg md:text-2xl font-semibold">
          {name} <span className="text-[#9E9EB1]">#{tag}</span>
        </h2>
        <small className="text-[#9E9EB1] text-sm md:text-base uppercase">
          {region}
        </small>
      </div>
    </section>
  );
};

export default SummonerDetails;
