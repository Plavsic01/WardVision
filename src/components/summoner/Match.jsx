import { ChevronDown } from "lucide-react";
import { useState } from "react";
import MatchDetails from "./MatchDetails";

const Match = ({ match }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleDetailsMenu = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const currentSummoner = match.currentSummoner;

  const matchItems = [
    currentSummoner.items[0],
    currentSummoner.items[1],
    currentSummoner.items[2],
    currentSummoner.items[6],
    currentSummoner.items[3],
    currentSummoner.items[4],
    currentSummoner.items[5],
  ];

  return (
    <section className="first:mt-0 mt-1 last:mb-7">
      <article
        className={`flex flex-col  md:rounded-md ${
          currentSummoner.win
            ? "bg-[#28344e] border-[#5383e8]"
            : "bg-[#59343b] border-[#e84057]"
        } gap-1 border-l-4  text-white`}
      >
        <div className="flex flex-row px-3 pt-2 justify-between text-sm">
          <div className="flex gap-2 items-center text-gray-300">
            <h2>
              {match.currentSummoner.win ? (
                <span className="text-[#5383E8]">Victory</span>
              ) : (
                <span className="text-[#E84057]">Defeat</span>
              )}
            </h2>
            <p>{match.gameDuration}</p>
          </div>
          <div className="flex gap-2 items-center text-gray-300">
            <h2>{match.gameType}</h2>
            <p>{match.gameCreation}</p>
            <button
              className={`${
                currentSummoner.win ? "bg-[#2f436e]" : "bg-[#703c47]"
              } p-1 rounded-sm`}
              onClick={handleDetailsMenu}
            >
              <ChevronDown
                className={`${
                  currentSummoner.win ? "text-[#5383e8]" : "text-[#e84057]"
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`border-t-2 ${
            currentSummoner.win ? "border-[#2f436e]" : "border-[#703c47]"
          } mb-2`}
        ></div>

        {/* SECOND ROW */}
        <div className="flex justify-between items-center px-4 pb-3">
          {/* CHAMPION ICON AND SUMMONER SPELLS */}
          <div className="flex gap-1">
            <img
              className="size-11"
              src={`${
                import.meta.env.VITE_API_URL
              }/api/champions/champion-icon/${
                currentSummoner.championName
              }.png`}
              alt="champion-icon"
            />
            <div className="flex flex-col gap-1">
              <img
                className="size-5"
                src={`${
                  import.meta.env.VITE_API_URL
                }/api/spells/summoner-spell/${currentSummoner.summonerD}`}
                alt="primary-summoner-spell-icon"
              />
              <img
                className="size-5"
                src={`${
                  import.meta.env.VITE_API_URL
                }/api/spells/summoner-spell/${currentSummoner.summonerF}`}
                alt="secondary-summoner-spell-icon"
              />
            </div>
          </div>

          {/* RESULT */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-center text-gray-100 text-sm items-center gap-1">
              <strong>{currentSummoner.kills}</strong>/
              <strong className="text-[#E84057]">
                {currentSummoner.deaths}
              </strong>
              /<strong>{currentSummoner.assists}</strong>
            </div>
            <small className="text-gray-400">{currentSummoner.kda}:1 KDA</small>
          </div>

          {/* CS */}
          <div>
            {match.gameType == "Arena" ? (
              <small className="text-[#E84057]">
                {currentSummoner.placement}th
              </small>
            ) : (
              <small className="text-gray-400">
                {currentSummoner.creepScore} CS
              </small>
            )}
          </div>

          {/* ITEMS */}
          <div>
            <ul className="grid grid-cols-4 items-center gap-0.5">
              {matchItems.map((item) => {
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
        </div>
      </article>

      {/* MATCH DETAILS */}

      {isDetailsOpen && <MatchDetails match={match} />}
    </section>
  );
};

export default Match;
