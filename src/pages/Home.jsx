import React from "react";
import SearchBar from "../components/SearchBar";
import NaafiriCover from "../assets/naafiri-cover.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="bg-[#28344e] flex flex-col items-center md:bg-[#1c1c1f]">
      <div className="w-full border border-[#1c2537]" />

      <Navbar className="hidden md:flex" />

      <img
        src={NaafiriCover}
        alt="champion-cover"
        className="p-10 pb-1 md:p-0 md:mt-10 w-120"
      />

      <SearchBar />

      <Navbar className="md:hidden" />
    </main>
  );
};

export default Home;
