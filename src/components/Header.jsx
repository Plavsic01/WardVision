import { Link } from "react-router-dom";
import Classic from "../assets/Classic_Ward.png";
import Honor from "../assets/Honor_Ward.png";

const Header = () => {
  return (
    <header className="w-full flex items-center py-1 justify-start gap-1 px-2 md:gap-5 md:px-15 bg-[#28344e] md:bg-[#1c1c1f]">
      <div className="flex gap-3 items-center">
        <Link to="/">
          <img src={Classic} alt="ward" className="h-15 hidden md:block" />
        </Link>
        <Link to="/">
          <img src={Honor} alt="ward" className="h-10 md:hidden" />
        </Link>
      </div>
      <div>
        <h1 className="text-white text-lg md:text-xl font-black">WardVision</h1>
      </div>
    </header>
  );
};

export default Header;
