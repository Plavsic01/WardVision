import { Link } from "react-router-dom";
import useLeaderboardSummoner from "../../hooks/useLeaderboardSummoner";

const LeaderboardRow = ({ summonerStats, region }) => {
  const { data } = useLeaderboardSummoner(summonerStats.puuid);

  return (
    <tr className="bg-[#1e2130]/70 border-b border-[#e4e4e7]/20 last:border-b-0">
      <td scope="row" className="px-2 py-5">
        {summonerStats.position}
      </td>
      <td scope="row" className="px-3">
        <div className="flex flex-col items-center justify-center">
          <Link to={`/summoners/${region}/${data.gameName}-${data.tagLine}`}>
            <p className="truncate max-w-40 font-bold">{data.gameName}</p>
            <small className="text-gray-400"> #{data.tagLine}</small>
          </Link>
        </div>
      </td>
      <td scope="row" className="px-3">
        <div>
          <p className="text-[#f9c452]">{summonerStats.leaguePoints}</p>
          <small className="text-[#9ca3af]">{summonerStats.winrate} WR</small>
        </div>
      </td>
      <td scope="row" className="px-1">
        <span className="text-[#22c55e]">{summonerStats.wins}</span>
        <span className="text-gray-500"> / </span>
        <span className="text-[#ef4444]">{summonerStats.losses}</span>
      </td>
    </tr>
  );
};

export default LeaderboardRow;
