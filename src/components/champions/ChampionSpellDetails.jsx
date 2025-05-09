import React from "react";

const ChampionSpellDetails = ({ selectedSpell }) => {
  return (
    <div className="bg-[#2a2a3a] rounded-lg p-4">
      <div className="flex items-start">
        <img
          className="rounded mr-4"
          src={`${
            selectedSpell.type === "Passive"
              ? `${import.meta.env.VITE_API_URL}/api/spells/passive/${
                  selectedSpell.icon
                }`
              : `${import.meta.env.VITE_API_URL}/api/spells/spell/${
                  selectedSpell.icon
                }`
          } `}
          alt={`${selectedSpell.name}`}
        />
        <div>
          <div className="flex items-center">
            <h3 className="text-white font-bold text-lg">
              {selectedSpell.name}
            </h3>
            <span className="px-2 py-1 ml-2 rounded text-white text-xs font-bold bg-[#4a7dff]">
              {selectedSpell.type}
            </span>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: `${selectedSpell.description}` }}
            className="text-sm text-gray-300 mt-2"
          ></p>
        </div>
      </div>
    </div>
  );
};

export default ChampionSpellDetails;
