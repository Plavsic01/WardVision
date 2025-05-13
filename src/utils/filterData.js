import { v4 as uuidv4 } from "uuid";

const filters = [
  {
    id: uuidv4(),
    type: "Type",
    dispatchType: "FILTER_TYPE",
    items: ["All", "Mage", "Assassin", "Fighter", "Tank", "Marksman"],
    defaultValue: "All",
  },
  {
    id: uuidv4(),
    type: "Difficulty",
    dispatchType: "FILTER_DIFFICULTY",
    items: ["All", "Very Easy", "Easy", "Normal", "Hard", "Very Hard"],
    defaultValue: "All",
  },
  {
    id: uuidv4(),
    type: "Sort by",
    dispatchType: "SORT_BY",
    items: ["A-Z", "Z-A"],
    defaultValue: "A-Z",
  },
];

const leaderboardFilters = [
  {
    id: uuidv4(),
    type: "Region",
    dispatchType: "REGION",
    items: ["Europe Nordic & East", "Europe West", "Middle East"],
    defaultValue: "EUNE",
  },
];

export { filters, leaderboardFilters };
