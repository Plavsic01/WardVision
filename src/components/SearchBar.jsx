import React from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { regions, regionsShort } from "../utils/regions.js";
import useSummoner from "../hooks/useSummoner.jsx";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [showRegionMenu, setShowRegionMenu] = useState(false);
  const [region, setRegion] = useState("eun1");
  const [summonerName, setSummonerName] = useState("");

  const { data: summonerInfo } = useSummoner(
    region,
    summonerName.replace("#", "-"),
    1500
  );

  const navigate = useNavigate();

  const handleRegionMenu = () => {
    setShowRegionMenu(!showRegionMenu);
  };

  return (
    <section className="flex items-center justify-center w-full p-4">
      <div className="relative flex items-center w-full max-w-5xl bg-white md:py-1 md:bg-[#31313C] rounded-md md:rounded-4xl">
        <div className="flex flex-col gap-1 px-6 py-2 w-24 md:w-64">
          <span className="hidden md:block text-sm text-white">
            <p>Region</p>
          </span>

          <div className="flex flex-row items-center text-sm text-gray-400 ">
            <button onClick={handleRegionMenu} className="cursor-pointer">
              <span className="text-[#5383e8] block md:hidden flex items-center">
                {regionsShort[region]}
                <ChevronDown className="w-4 h-4 ml-1" />
              </span>
              <span className="hidden md:flex items-center">
                {regions[region]}
                <ChevronDown className="w-4 h-4 ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div className="hidden md:block">|</div>

        <div className="flex-1 px-2">
          <span className="hidden md:block md:text-sm md:text-white">
            <p>Search</p>
          </span>

          <input
            type="text"
            placeholder="Game name + #EUNE"
            value={summonerName}
            onChange={(e) => setSummonerName(e.target.value)}
            onFocus={() => setShowRegionMenu(false)}
            className="w-full bg-transparent border-none outline-none text-black md:text-white placeholder-gray-400 text-sm"
          />
        </div>

        <div className="px-4 py-3 text-[#5383e8] font-bold text-xl md:text-white">
          .GG
        </div>

        {showRegionMenu && (
          <div className="absolute left-4 md:left-7 top-full py-1 z-1000">
            <div className="bg-[#1C1C1F] rounded-md h-55 md:h-full overflow-y-auto md:overflow-y-hidden">
              <ul className="text-[#A3A2B4]">
                <div className="flex flex-col text-sm">
                  {Object.entries(regions).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setRegion(key);
                        handleRegionMenu();
                      }}
                      className="bg-[#28344e] md:bg-[#31313C] mb-px px-2 py-2 cursor-pointer hover:bg-[#282830]"
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        )}
        {!showRegionMenu && Object.keys(summonerInfo).length !== 0 && (
          <div className="absolute top-full my-px left-25 md:left-65 rounded-sm bg-[#31313C]">
            <div className="flex items-center gap-2 w-64 md:w-125 px-2 py-1 text-red-400">
              <img
                style={{
                  width: "40px",
                  borderRadius: "20px",
                }}
                src={`https://ddragon.leagueoflegends.com/cdn/15.8.1/img/profileicon/${summonerInfo.profileIconId}.png`}
                alt="profile-icon"
              />

              <button
                className="flex items-center text-sm gap-1 cursor-pointer"
                onClick={() => {
                  setSummonerName("");

                  navigate(
                    `/summoners/${region}/${summonerName.replace("#", "-")}`
                  );
                }}
              >
                <span>{summonerInfo.gameName}</span>
                <span>#{summonerInfo.tagLine}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
