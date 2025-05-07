import React from "react";
import instagram from "../assets/instagram.png";
import linkedIn from "../assets/linkedin.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 px-3 mb-10">
      <div className="md:border-t md:border-gray-700 md:w-2/3 md:m-auto"></div>

      <div className="flex flex-col md:flex-row justify-center gap-5 md:items-center">
        {/*  */}
        <div className="flex justify-center gap-4 order-1 md:order-2">
          <a href="https://www.instagram.com/plavs1c" target="_blank">
            <img src={instagram} alt="instagram_logo" />
          </a>

          <a href="https://www.linkedin.com/in/plavsic01" target="_blank">
            <img src={linkedIn} alt="linkedin_logo" />
          </a>

          <a href="https://github.com/Plavsic01" target="_blank">
            <img src={github} alt="github_logo" />
          </a>
        </div>

        <div className="order-2 md:order-1 md:mt-5 md:basis-2/5">
          <p className="text-xs text-gray-500">
            © 2025 WardVision. WardVision is not endorsed by Riot Games and does
            not reflect the views or opinions of Riot Games or anyone officially
            involved in the production or management of League of Legends.
            League of Legends and Riot Games are trademarks or registered
            trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
