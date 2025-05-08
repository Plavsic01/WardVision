import React from "react";
import Navbar from "../components/Navbar";
import { Star, Search, ChevronDown, ChevronRight } from "lucide-react";

const Champions = () => {
  return (
    <section className="flex flex-col min-h-screen">
      {/* CHAMPIONS HEADER WITH SEARCH INPUT AND NAVBAR */}
      <header className="bg-[#5383E8]">
        <div className="relative mx-4">
          <input
            type="text"
            className="px-10 py-2 mt-2 bg-[#1a1a24] text-white focus:outline-none w-full placeholder-gray-400 text-xs rounded-sm"
            placeholder="Search champions..."
          />
          <Search className="absolute top-3 left-2 text-white p-1" />
        </div>
        <Navbar />
      </header>

      {/* MAIN CONTENT */}

      <main className="flex-1 max-w-6xl mx-auto w-full px-2 py-4">
        {/* FILTERS */}
        <section className="mb-6 flex flex-wrap justify-center text-white gap-2">
          <div className="flex items-center px-2 py-2 text-sm text-white bg-[#1e2130] rounded-md">
            <span className="text-white text-sm mr-2">Role:</span>
            <button className="flex items-center">
              All
              <ChevronDown className="p-1" />
            </button>
          </div>
          <div className="flex items-center px-2 py-2 text-sm text-white bg-[#1e2130] rounded-md">
            <span className="text-white text-sm mr-2">Difficulty:</span>
            <button className="flex items-center">
              All
              <ChevronDown className="p-1" />
            </button>
          </div>
          <div className="flex items-center px-2 py-2 text-sm text-white bg-[#1e2130] rounded-md">
            <span className="text-white text-sm mr-2">Sort By:</span>
            <button className="flex items-center">
              Name
              <ChevronDown className="p-1" />
            </button>
          </div>
        </section>

        {/* GRID */}

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          <button className="overflow-hidden rounded-xl">
            <div className="relative aspect-square">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={`${
                  import.meta.env.VITE_API_URL
                }/api/champions/champion-icon/Aatrox.png`}
                alt="Aatrox"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                <div className="flex justify-between items-end">
                  <div className="pl-1">
                    <p className="text-white font-medium text-sm">Aatrox</p>
                    <span className="text-xs text-gray-300">Fighter</span>
                  </div>
                  <div className="flex">
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 size-3" />
                    <Star className="text-yellow-400 size-3" />
                  </div>
                </div>
              </div>
            </div>
          </button>

          <button className="overflow-hidden rounded-xl">
            <div className="relative aspect-square">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={`${
                  import.meta.env.VITE_API_URL
                }/api/champions/champion-icon/Ahri.png`}
                alt="Ahri"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                <div className="flex justify-between items-end">
                  <div className="pl-1">
                    <p className="text-white font-medium text-sm">Ahri</p>
                    <span className="text-xs text-gray-300">Mage</span>
                  </div>
                  <div className="flex">
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 size-3" />
                  </div>
                </div>
              </div>
            </div>
          </button>

          <button className="overflow-hidden rounded-xl">
            <div className="relative aspect-square">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={`${
                  import.meta.env.VITE_API_URL
                }/api/champions/champion-icon/Akali.png`}
                alt="Akali"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                <div className="flex justify-between items-end">
                  <div className="pl-1">
                    <p className="text-white font-medium text-sm">Akali</p>
                    <span className="text-xs text-gray-300">Assassin</span>
                  </div>
                  <div className="flex">
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                  </div>
                </div>
              </div>
            </div>
          </button>

          <button className="overflow-hidden rounded-xl">
            <div className="relative aspect-square">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={`${
                  import.meta.env.VITE_API_URL
                }/api/champions/champion-icon/Alistar.png`}
                alt="Alistar"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                <div className="flex justify-between items-end">
                  <div className="pl-1">
                    <p className="text-white font-medium text-sm">Alistar</p>
                    <span className="text-xs text-gray-300">Tank</span>
                  </div>
                  <div className="flex">
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 size-3" />
                    <Star className="text-yellow-400 size-3" />
                    <Star className="text-yellow-400 size-3" />
                    <Star className="text-yellow-400 size-3" />
                  </div>
                </div>
              </div>
            </div>
          </button>

          <button className="overflow-hidden rounded-xl">
            <div className="relative aspect-square">
              <img
                className="object-cover w-full h-full"
                src={`${
                  import.meta.env.VITE_API_URL
                }/api/champions/champion-icon/Akali.png`}
                alt="Akali"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                <div className="flex justify-between items-end">
                  <div className="pl-1">
                    <p className="text-white font-medium text-sm">Akali</p>
                    <span className="text-xs text-gray-300">Assassin</span>
                  </div>
                  <div className="flex">
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                    <Star className="text-yellow-400 fill-yellow-400 size-3" />
                  </div>
                </div>
              </div>
            </div>
          </button>
        </section>

        {/* fali overflow-hidden u section i u prvom divu */}

        {/* MORE ABOUT SPECIFIC CHAMPION */}
        <section className="bg-[#1e2130] rounded-lg overflow-hidden">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2130] to-transparent"></div>
            <img
              className="w-full object-cover object-center"
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg`}
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h1 className="text-3xl font-bold text-white">Ahri</h1>
              <p className="text-gray-300">the Nine-Tailed Fox</p>
              <div className="flex items-center mt-2">
                <span className="bg-[#4a7dff] text-white text-xs px-2 py-1 rounded mr-2">
                  Mage
                </span>
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-yellow-400 size-3" />
                  <Star className="text-yellow-400 fill-yellow-400 size-3" />
                  <Star className="text-yellow-400 fill-yellow-400 size-3" />
                  <Star className="text-yellow-400 fill-yellow-400 size-3" />
                  <Star className="text-yellow-400 size-3" />
                </div>
              </div>
            </div>
            <button className="absolute top-4 right-4 rounded-full bg-[#1e2130] opacity-70 hover:opacity-100">
              <ChevronRight className="text-white p-1" />
            </button>
          </div>
          <div className="p-6 border-b border-gray-700">
            <p className="text-gray-300">
              Innately connected to the magic of the spirit realm, Ahri is a
              vastaya who can reshape magic into orbs of raw energy. She revels
              in toying with her prey by manipulating their emotions before
              devouring their life essence.
            </p>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-4">Abilities</h2>
            <div className="flex mb-6 pb-2 overflow-x-auto">
              <button className="flex-shrink-0 mr-2 p-1 rounded bg-[#4a7dff] cursor-pointer">
                <img
                  className="rounded size-12"
                  src={`${
                    import.meta.env.VITE_API_URL
                  }/api/spells/passive/Ahri_SoulEater2.png`}
                  alt="aatrox-passive"
                />
              </button>
              <button className="flex-shrink-0 mr-2 p-1 rounded cursor-pointer">
                <img
                  className="rounded size-12"
                  src={`${
                    import.meta.env.VITE_API_URL
                  }/api/spells/spell/AhriQ.png`}
                  alt="aatrox-passive"
                />
              </button>
              <button className="flex-shrink-0 mr-2 p-1 rounded cursor-pointer">
                <img
                  className="rounded size-12"
                  src={`${
                    import.meta.env.VITE_API_URL
                  }/api/spells/spell/AhriW.png`}
                  alt="aatrox-passive"
                />
              </button>
              <button className="flex-shrink-0 mr-2 p-1 rounded cursor-pointer">
                <img
                  className="rounded size-12"
                  src={`${
                    import.meta.env.VITE_API_URL
                  }/api/spells/spell/AhriE.png`}
                  alt="aatrox-passive"
                />
              </button>
              <button className="flex-shrink-0 mr-2 p-1 rounded cursor-pointer">
                <img
                  className="rounded size-12"
                  src={`${
                    import.meta.env.VITE_API_URL
                  }/api/spells/spell/AhriR.png`}
                  alt="aatrox-passive"
                />
              </button>
            </div>
            <div className="bg-[#2a2a3a] rounded-lg p-4">
              <div className="flex items-start">
                <img
                  className="rounded mr-4"
                  src={`${
                    import.meta.env.VITE_API_URL
                  }/api/spells/passive/Ahri_SoulEater2.png`}
                  alt=""
                />
                <div>
                  <div className="flex items-center">
                    <h3 className="text-white font-bold text-lg">
                      Essence Theft
                    </h3>
                    <span className="px-2 py-1 ml-2 rounded text-white text-xs font-bold bg-[#4a7dff]">
                      Passive
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    Whenever Ahri kills a unit, she gains a stack of Essence
                    Theft. When she has 9 stacks, her next ability heals her for
                    a percentage of the damage dealt.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#2a2a3a] p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Health</p>
                <p className="text-white font-medium">526 (+92)</p>
              </div>
              <div className="bg-[#2a2a3a] p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Mana</p>
                <p className="text-white font-medium">418 (+25)</p>
              </div>
              <div className="bg-[#2a2a3a] p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Armor</p>
                <p className="text-white font-medium">21 (+3.5)</p>
              </div>
              <div className="bg-[#2a2a3a] p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Magic Resist</p>
                <p className="text-white font-medium">30 (+0.5)</p>
              </div>
              <div className="bg-[#2a2a3a] p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Attack Damage</p>
                <p className="text-white font-medium">53 (+3)</p>
              </div>
              <div className="bg-[#2a2a3a] p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Attack Speed</p>
                <p className="text-white font-medium">0.668</p>
              </div>
              <div className="bg-[#2a2a3a] p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Move Speed</p>
                <p className="text-white font-medium">330</p>
              </div>
              <div className="bg-[#2a2a3a] p-3 rounded-lg">
                <p className="text-gray-400 text-sm">Attack Range</p>
                <p className="text-white font-medium">550</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Champions;
