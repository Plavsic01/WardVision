const ChampionSpell = ({ spell, selectedSpell, handleSelectedSpell }) => {
  return (
    <button
      className={`flex-shrink-0 mr-2 p-1 rounded ${
        selectedSpell.id === spell.id ? "bg-[#4a7dff]" : ""
      } cursor-pointer`}
      onClick={() => handleSelectedSpell(spell)}
    >
      <img
        className="rounded size-12"
        src={`${
          spell.type === "Passive"
            ? `${import.meta.env.VITE_API_URL}/api/spells/passive/${spell.icon}`
            : `${import.meta.env.VITE_API_URL}/api/spells/spell/${spell.icon}`
        } `}
        alt={`${spell.name}`}
      />
    </button>
  );
};

export default ChampionSpell;
