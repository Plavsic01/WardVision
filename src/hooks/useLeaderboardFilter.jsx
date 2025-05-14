import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "QUEUE":
      return {
        ...state,
        queue: action.payload,
      };
    case "REGION":
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  region: "eun1",
  queue: "solo",
};

const useLeaderboardFilter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export default useLeaderboardFilter;
