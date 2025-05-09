import { useState } from "react";
import ChampionSpell from "./ChampionSpell";
import ChampionSpellDetails from "./ChampionSpellDetails";

const ChampionSpells = ({ spells }) => {
  const [selectedSpell, setSelectedSpell] = useState(spells[0]);

  const handleSelectedSpell = (spell) => {
    setSelectedSpell(spell);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-white mb-4">Abilities</h2>
      <div className="flex mb-6 pb-2 overflow-x-auto">
        {spells.map((spell) => (
          <ChampionSpell
            key={spell.id}
            spell={spell}
            selectedSpell={selectedSpell}
            handleSelectedSpell={handleSelectedSpell}
          />
        ))}
      </div>
      <ChampionSpellDetails selectedSpell={selectedSpell} />
    </div>
  );
};

export default ChampionSpells;
