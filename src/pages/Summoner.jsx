import { useParams } from "react-router-dom";
import useSummonerStats from "../hooks/useSummonerStats";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RankedStats from "../components/summoner/RankedStats";
import SummonerDetails from "../components/summoner/SummonerDetails";
import useRankedStats from "../hooks/useRankedStats";
import Loading from "../components/Loading";
import MatchHistory from "../components/summoner/MatchHistory";
import useMatchHistory from "../hooks/useMatchHistory";

const Summoner = () => {
  const { region, gameName } = useParams();

  const { data: summonerInfo, isLoading: isLoadingSummoner } = useSummonerStats(
    region,
    gameName,
    0
  );

  const {
    rankedStats,
    status: statusStats,
    isLoading: isLoadingStats,
    isFetching: isFetchingStats,
    isError: isErrorStats,
  } = useRankedStats(summonerInfo.puuid, region);

  const {
    matchHistory,
    status: statusHistory,
    isLoading: isLoadingHistory,
    isFetching: isFetchingHistory,
    isError: isErrorHistory,
  } = useMatchHistory(summonerInfo.puuid, region);

  return (
    <main>
      <nav className="bg-[#5383E8]">
        <SearchBar />
        <Navbar />
      </nav>

      {!isLoadingSummoner && statusStats !== "pending" ? (
        <SummonerDetails
          name={summonerInfo.gameName}
          tag={summonerInfo.tagLine}
          level={summonerInfo.summonerLevel}
          icon={summonerInfo.profileIconId}
          region={region}
        />
      ) : (
        <Loading isLoading={isLoadingSummoner} />
      )}

      <div className="flex flex-col gap-0.5 md:gap-2 md:flex-row md:justify-center">
        <Loading isLoading={isLoadingStats} />

        {statusStats !== "pending" && !isErrorStats && !isLoadingStats && (
          <div>
            {rankedStats.map((ranked) => (
              <RankedStats
                key={ranked.leagueId}
                {...ranked}
                isFetching={isFetchingStats}
              />
            ))}
          </div>
        )}

        <div>
          <Loading isLoading={isLoadingHistory} />

          {statusHistory !== "pending" &&
            !isErrorHistory &&
            !isLoadingHistory &&
            matchHistory.length > 0 && (
              <MatchHistory
                matches={matchHistory}
                isFetching={isFetchingHistory}
              />
            )}
        </div>
      </div>
    </main>
  );
};

export default Summoner;
