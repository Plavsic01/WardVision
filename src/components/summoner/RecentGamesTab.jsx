import React from "react";

//TODO: BLUR MATCH HISTORY IS_FETCHING

const RecentGamesTab = ({ stats }) => {
  return (
    <article className="text-gray-100 bg-gray-0 flex gap-0.5 mt-1.5 flex-col">
      <section className="text-left text-sm pl-5 py-2 bg-[#31313C] md:rounded-t-md">
        <h2>Recent Games</h2>
      </section>
      <section className="flex justify-between px-5 py-2 bg-[#31313C] text-xs text-gray-400 md:rounded-b-md">
        <div className="flex flex-col gap-2 justify-center items-left">
          <p>
            {stats.totalGames}G {stats.wins}W {stats.losses}L
          </p>
          <div>
            <p>
              {stats.kills} /{" "}
              <span className="text-[#E84057]">{stats.deaths}</span> /{" "}
              {stats.assists}
            </p>
            <strong className="text-base text-white">{stats.kda} : 1</strong>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p>Most Played</p>
          <div className="flex justify-center gap-1">
            {stats.mostPlayedChampions.map((champion) => {
              return (
                <div key={champion}>
                  {champion && (
                    <img
                      className="size-7 md:size-8 lg:size-10"
                      src={`${
                        import.meta.env.VITE_API_URL
                      }/api/champions/champion-icon/${champion}.png`}
                      alt={`${champion}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Preffered Role</p>
          <img
            className="size-7 md:size-8 lg:size-10"
            src={`${stats.prefferedRole}`}
          />
        </div>
      </section>
    </article>
  );
};

export default RecentGamesTab;
