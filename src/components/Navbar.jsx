import React from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../router/routes";

const Navbar = ({ className }) => {
  const location = useLocation();

  return (
    <nav
      className={`flex ${className} bg-[#5383E8] gap-5 text-white w-screen min-h-12 items-center justify-center text-sm md:text-base`}
    >
      {routes.map((route) => {
        return (
          <div key={route.id}>
            <Link
              to={route.path}
              className={`pb-[10px] hover:border-b-4 ${
                location.pathname === route.path
                  ? "text-white border-b-4"
                  : "text-[#C3CBD1] hover:text-white"
              }`}
            >
              {route.name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
