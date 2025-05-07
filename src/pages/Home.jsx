import React from "react";
import SearchBar from "../components/SearchBar";
import NaafiriCover from "../assets/naafiri-cover.png";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home = () => {
  return (
    <main>
      <div className="bg-[#28344e] flex flex-col items-center md:bg-[#1c1c1f]">
        <Header />
        <div className="w-full border border-[#1c2537]"></div>

        <span className="hidden md:block">
          <Navbar />
        </span>

        <img
          src={NaafiriCover}
          alt="champion-cover"
          className="p-10 pb-1 md:p-0 md:mt-10 w-120"
        />

        <SearchBar />
      </div>

      <span className="flex md:hidden">
        <Navbar />
      </span>
    </main>
  );
};

export default Home;
