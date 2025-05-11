import { v4 as uuidv4 } from "uuid";

const filters = [
  {
    id: uuidv4(),
    type: "Type",
    dispatch: "FILTER_TYPE",
    items: ["All", "Mage", "Assassin", "Fighter", "Tank", "Marksman"],
    defaultValue: "All",
  },
  {
    id: uuidv4(),
    type: "Difficulty",
    dispatch: "FILTER_DIFFICULTY",
    items: ["All", "Very Easy", "Easy", "Normal", "Hard", "Very Hard"],
    defaultValue: "All",
  },
  {
    id: uuidv4(),
    type: "Sort by",
    dispatch: "SORT_BY",
    items: ["A-Z", "Z-A"],
    defaultValue: "A-Z",
  },
];

export default filters;
