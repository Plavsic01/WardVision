import { Star, ChevronRight } from "lucide-react";
import ChampionSpells from "./ChampionSpells";
import ChampionStats from "./ChampionStats";

const ChampionDetails = ({ champion, handleBackToChampions }) => {
  return (
    <section className={`bg-[#1e2130] rounded-lg overflow-hidden`}>
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2130] to-transparent"></div>
        <img
          className="w-full object-cover object-center"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.splashArt}.jpg`}
          alt=""
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h1 className="text-3xl font-bold text-white">{champion.name}</h1>
          <p className="text-gray-300">{champion.title}</p>
          <div className="flex items-center mt-2">
            <span className="bg-[#4a7dff] text-white text-xs px-2 py-1 rounded mr-2">
              {champion.tag}
            </span>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, indx) => (
                <Star
                  key={indx}
                  className={`text-yellow-400 ${
                    champion.difficulty > indx ? "fill-yellow-400" : ""
                  } size-3`}
                />
              ))}
            </div>
          </div>
        </div>
        <button
          className="absolute top-4 left-4 rounded-full bg-[#1e2130] opacity-70 hover:opacity-100"
          onClick={() => handleBackToChampions()}
        >
          <ChevronRight className="text-white p-1 md:p-2 size-9 md:size-12" />
        </button>
      </div>
      <div className="p-6 border-b border-gray-700">
        <p className="text-gray-300">{champion.lore}</p>
      </div>
      <ChampionSpells spells={champion.spells} />

      <ChampionStats stats={champion.stats} />
    </section>
  );
};

export default ChampionDetails;
