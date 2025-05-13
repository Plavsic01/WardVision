import { useReducer } from "react";

const mapDifficultyLevel = (difficulty) => {
  switch (difficulty) {
    case "Very Easy":
      return 1;
    case "Easy":
      return 2;
    case "Normal":
      return 3;
    case "Hard":
      return 4;
    case "Very Hard":
      return 5;
    default:
      return 0;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        allChampions: action.payload,
      };
    case "FILTER_TYPE":
      if (action.payload === "All") {
        return {
          ...state,
          type: "",
        };
      }
      return {
        ...state,
        type: action.payload,
      };
    case "FILTER_DIFFICULTY":
      if (action.payload === "All") {
        return {
          ...state,
          difficulty: "",
        };
      }
      return {
        ...state,
        difficulty: mapDifficultyLevel(action.payload),
      };
    case "SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  type: "",
  difficulty: "",
  sortBy: "",
  search: "",
};

const useChampionFilter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export default useChampionFilter;
