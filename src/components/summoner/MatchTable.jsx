import MatchRow from "./MatchRow";

const MatchTable = ({ team, gameType, teamSide }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-[#31313C]">
          <tr className="whitespace-nowrap text-center">
            <th scope="col" className="min-w-55 py-3">
              {gameType === "Arena" ? (
                <span
                  className={`${
                    team[0].win ? "text-blue-400" : "text-red-400"
                  } `}
                >
                  {team[0].placement}th
                </span>
              ) : (
                <span
                  className={`${
                    team[0].win ? "text-blue-400" : "text-red-400"
                  } `}
                >
                  {team[0].win ? "Victory" : `Defeat`}
                  {teamSide === 0 ? " (Blue Team)" : " (Red Team)"}
                </span>
              )}
            </th>
            <th scope="col" className="px-6 py-3">
              KDA
            </th>
            <th scope="col" className="px-6 py-3">
              Damage
            </th>
            {gameType !== "Arena" ? (
              <>
                <th scope="col" className="px-6 py-3">
                  Wards
                </th>
                <th scope="col" className="px-6 py-3">
                  CS
                </th>
              </>
            ) : (
              <th scope="col" className="px-6 py-3">
                Gold
              </th>
            )}

            <th scope="col" className="px-10 py-3">
              Items
            </th>
          </tr>
        </thead>
        <tbody>
          {team.map((player) => (
            <MatchRow key={player.puuid} player={player} gameType={gameType} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchTable;
