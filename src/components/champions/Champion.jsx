import { Star } from "lucide-react";
import { useChampionContext } from "../../context/ChampionContext";

const Champion = ({ champion }) => {
  const { handleSelectedChampion } = useChampionContext();

  return (
    <button
      className="overflow-hidden rounded-xl cursor-pointer"
      onClick={() => handleSelectedChampion(champion.id)}
    >
      <div className="relative aspect-square">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={`${import.meta.env.VITE_API_URL}/api/champions/champion-icon/${
            champion.icon
          }`}
          alt={`${champion.name}`}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
          <div className="flex justify-between items-end">
            <div className="pl-1">
              <p className="text-white font-medium text-sm">{champion.name}</p>
              <span className="text-xs text-gray-300">{champion.tag}</span>
            </div>
            <div className="hidden sm:flex">
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
      </div>
    </button>
  );
};

export default Champion;
