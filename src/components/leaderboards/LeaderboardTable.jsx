import LeaderboardRow from "./LeaderboardRow";

const LeaderboardTable = ({ leaderboard, region }) => {
  return (
    <table className="w-full border-collapse text-white">
      <thead className="text-center bg-[#2a2a3a] text-[#9ca3af] text-xs">
        <tr>
          <th scope="col" className="py-2">
            #
          </th>
          <th scope="col" className="py-2">
            Summoner
          </th>
          <th scope="col" className="py-2">
            LP
          </th>
          <th scope="col" className="py-2">
            W/L
          </th>
        </tr>
      </thead>
      <tbody className="text-xs text-center">
        {leaderboard.map((summoner) => (
          <LeaderboardRow
            key={summoner.leagueId}
            summonerStats={summoner}
            region={region}
          />
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;
