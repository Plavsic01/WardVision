import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import Filters from "../components/champions/Filters";
import ChampionsGrid from "../components/champions/ChampionsGrid";
import ChampionDetails from "../components/champions/ChampionDetails";
import useChampions from "../hooks/useChampions";
import useChampionStats from "../hooks/useChampionStats";
import Loading from "../components/Loading";
import { useChampionContext } from "../context/ChampionContext";

const Champions = () => {
  const { data: champions, isLoading, isError } = useChampions();

  const { selectedChampion, handleBackToChampions, scrollPosition } =
    useChampionContext();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedChampion]);

  const {
    data: championDetails,
    isLoading: isChampionLoading,
    isError: isChampionError,
  } = useChampionStats(selectedChampion);

  return (
    <section className="flex flex-col min-h-screen">
      {/* CHAMPIONS HEADER WITH SEARCH INPUT AND NAVBAR */}
      <header className="bg-[#5383E8]">
        <div className="relative mx-4">
          <input
            type="text"
            className="px-10 py-2 mt-2 bg-[#1a1a24] text-white focus:outline-none w-full placeholder-gray-400 text-xs rounded-sm"
            placeholder="Search champions..."
          />
          <Search className="absolute top-3 left-2 text-white p-1" />
        </div>
        <Navbar />
      </header>

      {/* MAIN CONTENT */}

      <main className="flex-1 max-w-6xl mx-auto w-full px-2 py-4">
        {/* FILTERS */}
        <Filters />

        {/* GRID */}
        {!selectedChampion && !isLoading && !isError && (
          <ChampionsGrid
            champions={champions}
            scrollPosition={scrollPosition}
          />
        )}

        {selectedChampion && isChampionLoading && <Loading />}

        {championDetails && !isChampionLoading && !isChampionError && (
          <ChampionDetails
            champion={championDetails}
            handleBackToChampions={handleBackToChampions}
          />
        )}
      </main>
    </section>
  );
};

export default Champions;
