import { Link, useParams } from "react-router-dom";

const MatchRow = ({ player, gameType }) => {
  const { region } = useParams();

  return (
    <tr className={`${player.win ? "bg-[#2E436F]" : "bg-[#59343b]"}`}>
      <td scope="row" className="pl-5 py-2 whitespace-nowrap">
        <div className="flex gap-1 items-center">
          <img
            className="size-10"
            src={`${import.meta.env.VITE_API_URL}/api/champions/champion-icon/${
              player.championName
            }.png`}
            alt="champion-icon"
          />
          <div className="flex flex-col gap-1">
            <img
              className="size-4"
              src={`${import.meta.env.VITE_API_URL}/api/spells/summoner-spell/${
                player.summonerD
              }`}
              alt="primary-summoner-spell-icon"
            />
            <img
              className="size-4"
              src={`${import.meta.env.VITE_API_URL}/api/spells/summoner-spell/${
                player.summonerF
              }`}
              alt="secondary-summoner-spell-icon"
            />
          </div>
          <div className="pl-2">
            <Link
              to={`/summoners/${region}/${player.gameName}-${player.tagLine}`}
              target="_blank"
              className="block cursor-pointer text-gray-200 truncate max-w-[120px] overflow-hidden"
            >
              {player.gameName}
            </Link>
          </div>
        </div>
      </td>
      <td scope="row" className="whitespace-nowrap text-xs">
        <div className="flex flex-col">
          <div className="flex justify-center items-center gap-1">
            <strong className="text-gray-100">{player.kills}</strong>/
            <strong className="text-[#E84057]">{player.deaths}</strong>/
            <strong className="text-gray-100">{player.assists}</strong>
          </div>
          <small className="text-gray-400 text-center">
            {player.kda}:1 KDA
          </small>
        </div>
      </td>

      <td scope="row" className="whitespace-nowrap text-center">
        <p>{player.totalDamage}</p>
      </td>

      {gameType !== "Arena" ? (
        <>
          <td scope="row" className="whitespace-nowrap text-center">
            <p>{player.wards}</p>
          </td>

          <td scope="row" className="whitespace-nowrap text-center">
            <p>{player.creepScore}</p>
          </td>
        </>
      ) : (
        <td scope="row" className="whitespace-nowrap text-center">
          <p>{player.gold}</p>
        </td>
      )}

      <td scope="row" className="whitespace-nowrap pl-2">
        <div>
          <ul className="grid grid-cols-8 items-center gap-6 md:gap-1">
            {player.items.map((item) => {
              return (
                <div key={item.id}>
                  {item.itemId === 0 ? (
                    <li className="size-5 bg-[#385199] rounded-sm"></li>
                  ) : (
                    <li className="size-5">
                      <img
                        className="rounded-sm"
                        src={`${
                          import.meta.env.VITE_API_URL
                        }/api/items/item-icon/${item.itemId}.png`}
                        alt={item.itemId}
                      />
                    </li>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default MatchRow;
