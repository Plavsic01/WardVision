import { createContext, useContext, useState, useCallback } from "react";

const ChampContext = createContext();

const useChampionContext = () => {
  const {
    selectedChampion,
    handleSelectedChampion,
    scrollPosition,
    handleBackToChampions,
  } = useContext(ChampContext);
  return {
    selectedChampion,
    handleSelectedChampion,
    scrollPosition,
    handleBackToChampions,
  };
};

const ChampionContext = ({ children }) => {
  const [selectedChampion, setSelectedChampion] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleBackToChampions = useCallback(() => {
    setSelectedChampion("");
  }, []);

  const handleSelectedChampion = (champion) => {
    setScrollPosition(window.scrollY);
    setSelectedChampion(champion);
  };

  return (
    <ChampContext.Provider
      value={{
        selectedChampion,
        handleSelectedChampion,
        scrollPosition,
        handleBackToChampions,
      }}
    >
      {children}
    </ChampContext.Provider>
  );
};

export { useChampionContext, ChampionContext };
