import { useState } from "react";
import Navbar from "../components/Navbar";
import useLeaderboard from "../hooks/useLeaderboard";
import Filters from "../components/Filters";
import {
  leaderboardFilters,
  leaderboardFiltersShort,
} from "../utils/filterData";
import LeaderboardPagination from "../components/leaderboards/LeaderboardPagination";
import LeaderboardTable from "../components/leaderboards/LeaderboardTable";
import useLeaderboardFilter from "../hooks/useLeaderboardFilter";

const Leaderboard = () => {
  const [currentPageData, setCurrentPageData] = useState([]);
  const { state, dispatch } = useLeaderboardFilter();

  const {
    data: leaderboard,
    isLoading,
    isError,
  } = useLeaderboard(state.region, state.queue);

  const handleCurrentPageData = (data) => {
    setCurrentPageData(data);
  };

  return (
    <section>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-4">
        <section>
          <div className="flex flex-col">
            <h1 className="text-white text-xl font-bold">Leaderboard</h1>
            <p className="text-gray-400 text-sm">Top ranked players</p>
          </div>
          <div className="mt-5">
            {/* FILTERS (HAVE TO MAKE 2 FILTERS 1 FOR SMALL SCREENS AND 1 FOR LARGE)*/}

            <Filters filters={leaderboardFiltersShort} dispatch={dispatch} />
            {/* <Filters filters={leaderboardFilters} dispatch={dispatch} /> */}

            <div className="rounded-t-lg overflow-hidden">
              <LeaderboardTable
                leaderboard={currentPageData}
                region={state.region}
              />
            </div>

            {leaderboard && (
              <LeaderboardPagination
                data={leaderboard}
                handleCurrentData={handleCurrentPageData}
              />
            )}
          </div>
        </section>
      </main>
    </section>
  );
};

export default Leaderboard;
