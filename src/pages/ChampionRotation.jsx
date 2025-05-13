import ChampionsGrid from "../components/champions/ChampionsGrid";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { useChampionContext } from "../context/ChampionContext";
import useChampionRotation from "../hooks/useChampionRotation";
import useChampionStats from "../hooks/useChampionStats";
import ChampionDetails from "../components/champions/ChampionDetails";
import { Calendar } from "lucide-react";
import { Info } from "lucide-react";

const ChampionRotation = () => {
  const { data: championRotation, isLoading, isError } = useChampionRotation();

  const { selectedChampion, handleBackToChampions, scrollPosition } =
    useChampionContext();

  const {
    data: championDetails,
    isLoading: isChampionLoading,
    isError: isChampionError,
  } = useChampionStats(selectedChampion);

  return (
    <section>
      <Navbar />

      {isLoading && (
        <div className="flex justify-center items-center min-h-screen">
          <Loading />
        </div>
      )}

      {isError && (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-red-500 text-lg mb-4">
            Failed to load champion rotation.
          </p>
        </div>
      )}

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-4">
        <section>
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
            <div>
              <h1 className="text-white text-xl font-bold">
                Free Champion Rotation
              </h1>
              <p className="text-gray-400 text-sm">
                Play these champions for free
              </p>
            </div>

            <div className="flex items-center gap-2 p-4 rounded-xl bg-[#1e2130] mb-3">
              <Calendar className="text-[#4a7dff]" />
              <div>
                <p className="text-white text-xs">Next rotation:</p>
                <p className="text-[#4a7dff] text-sm">
                  {championRotation?.nextRotation}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-xl bg-[#1e2130] mb-3">
            <Info className="text-[#4a7dff]" />
            <div className="lg:hidden">
              <p className="text-white text-xs">
                Free champion rotations make a selection of champions available
                for free play each week.
              </p>
            </div>
            <div className="hidden lg:flex">
              <p className="text-white text-sm">
                Free champion rotations make a selection of champions available
                for free play each week. This is a great way to try champions
                before purchasing and expand your playstyle.
              </p>
            </div>
          </div>
        </section>

        {/* GRID */}
        {!selectedChampion && championRotation?.freeChampions.length > 0 && (
          <ChampionsGrid
            champions={championRotation.freeChampions}
            scrollPosition={scrollPosition}
          />
        )}

        {selectedChampion && isChampionLoading && <Loading />}

        {championDetails && !isChampionLoading && !isChampionError && (
          <ChampionDetails
            champion={championDetails}
            handleBackToChampions={handleBackToChampions}
          />
        )}

        <section className="mt-5 lg:hidden">
          <div className="flex flex-col gap-2 p-2 bg-[#1e2130] text-white rounded-xl">
            <h2 className="text-lg font-bold">About Rotation</h2>
            <p className="text-xs">
              Every week, a new group of champions becomes available to play for
              free. The rotation typically changes on Tuesday.
            </p>
            <p className="text-xs">
              Free champion rotation is a great way to try champions before
              purchasing them with Blue Essence or Riot Points.
            </p>
            <p className="text-xs">
              Note that free rotation champions cannot be used in Ranked games
              until you own them.
            </p>
          </div>
        </section>

        <section className="hidden lg:block lg:mt-5">
          <div className="flex flex-col gap-2 p-3 bg-[#1e2130] text-white rounded-xl">
            <h2 className="text-xl font-bold">About Champion Rotation</h2>
            <p className="text-sm">
              Every week, a new group of champions becomes available to play for
              free. The rotation typically changes on Tuesday.
            </p>
            <p className="text-sm my-2">
              Free champion rotation is a great way to:
            </p>
            <ul className="flex flex-col gap-2 ml-5 text-sm list-disc">
              <li>
                Try champions before purchasing them with Blue Essence or Riot
                Points
              </li>
              <li>Learn different roles and playstyles</li>
              <li>
                Complete missions that require playing specific champion types
              </li>
              <li>Find new favorites that match your playstyle</li>
            </ul>
            <p className="text-sm mt-2">
              Note that free rotation champions cannot be used in Ranked games
              until you own them.
            </p>
          </div>
        </section>
      </main>
    </section>
  );
};

export default ChampionRotation;
