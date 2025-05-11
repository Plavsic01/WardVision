import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import useChampionFilter from "../hooks/useChampionFilter";

const ChampContext = createContext();

const useChampionContext = () => {
  const {
    selectedChampion,
    handleSelectedChampion,
    scrollPosition,
    handleBackToChampions,
    state,
    filteredChampions,
    dispatch,
  } = useContext(ChampContext);
  return {
    selectedChampion,
    handleSelectedChampion,
    scrollPosition,
    handleBackToChampions,
    state,
    filteredChampions,
    dispatch,
  };
};

const ChampionContext = ({ children }) => {
  const [selectedChampion, setSelectedChampion] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const { state, dispatch } = useChampionFilter();

  const handleBackToChampions = useCallback(() => {
    setSelectedChampion("");
  }, []);

  const handleSelectedChampion = (champion) => {
    setScrollPosition(window.scrollY);
    setSelectedChampion(champion);
  };

  const filteredChampions = useMemo(() => {
    let filteredData = state.allChampions;

    if (state.type) {
      filteredData = filteredData.filter(
        (champion) => champion.tag === state.type
      );
    }

    if (state.difficulty) {
      filteredData = filteredData.filter(
        (champion) => champion.difficulty === state.difficulty
      );
    }

    if (state.sortBy) {
      if (state.sortBy === "A-Z") {
        filteredData = filteredData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (state.sortBy === "Z-A") {
        filteredData = filteredData.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
    }

    return filteredData;
  }, [state.type, state.difficulty, state.sortBy, state.allChampions]);

  return (
    <ChampContext.Provider
      value={{
        selectedChampion,
        handleSelectedChampion,
        scrollPosition,
        handleBackToChampions,
        state,
        filteredChampions,
        dispatch,
      }}
    >
      {children}
    </ChampContext.Provider>
  );
};

export { useChampionContext, ChampionContext };
