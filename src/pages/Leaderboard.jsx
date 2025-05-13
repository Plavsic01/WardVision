import { useState } from "react";
import Navbar from "../components/Navbar";
import useLeaderboard from "../hooks/useLeaderboard";
import Filters from "../components/champions/Filters";
import { leaderboardFilters } from "../utils/filterData";

const Leaderboard = () => {
  const [region, setRegion] = useState("eun1");
  const [gameType, setGameType] = useState("RANKED_SOLO_5x5");

  const {
    data: leaderboard,
    isLoading,
    isError,
  } = useLeaderboard(region, gameType);

  return (
    <section>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-4">
        <section className="">
          <div className="flex flex-col">
            <h1 className="text-white text-xl font-bold">Leaderboard</h1>
            <p className="text-gray-400 text-sm">Top ranked players</p>
          </div>
          <div>
            {/* FILTERS (HAVE TO MAKE 2 FILTERS 1 FOR SMALL SCREENS AND 1 FOR LARGE)*/}
            <Filters filters={leaderboardFilters} />
            {/* <Filters filters={leaderboardFilters} /> */}
          </div>
        </section>
      </main>
    </section>
  );
};

export default Leaderboard;
