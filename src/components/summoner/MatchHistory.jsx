import { calculateSummonerStats } from "../../utils/summonerStats";
import Match from "./Match";
import RecentGamesTab from "./RecentGamesTab";

const MatchHistory = ({ matches, isFetching }) => {
  const summonerStats = calculateSummonerStats(matches);

  return (
    <section
      className={`flex flex-col bg-gray-0 gap-1 md:w-100 lg:w-150 xl:w-185 transition duration-500 ${
        isFetching ? " blur-xs" : ""
      }`}
    >
      <RecentGamesTab stats={summonerStats} />

      {matches.map((match) => (
        <Match key={match.id} match={match} />
      ))}
    </section>
  );
};

export default MatchHistory;
