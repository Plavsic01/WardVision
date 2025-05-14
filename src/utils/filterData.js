import { v4 as uuidv4 } from "uuid";
import { regions, regionsShort } from "./regions";

const filters = [
  {
    id: uuidv4(),
    type: "Type",
    dispatchType: "FILTER_TYPE",
    payload: [
      { type: "All", name: "All" },
      { type: "Mage", name: "Mage" },
      { type: "Assassin", name: "Assassin" },
      { type: "Fighter", name: "Fighter" },
      { type: "Tank", name: "Tank" },
      { type: "Marksman", name: "Marksman" },
    ],
    defaultValue: "All",
  },
  {
    id: uuidv4(),
    type: "Difficulty",
    dispatchType: "FILTER_DIFFICULTY",
    payload: [
      { type: "All", name: "All" },
      { type: "Very Easy", name: "Very Easy" },
      { type: "Easy", name: "Easy" },
      { type: "Normal", name: "Normal" },
      { type: "Hard", name: "Hard" },
      { type: "Very Hard", name: "Very Hard" },
    ],
    defaultValue: "All",
  },
  {
    id: uuidv4(),
    type: "Sort by",
    dispatchType: "SORT_BY",
    payload: [
      { type: "A-Z", name: "A-Z" },
      { type: "Z-A", name: "Z-A" },
    ],
    defaultValue: "A-Z",
  },
];

const leaderboardFiltersShort = [
  {
    id: uuidv4(),
    type: "Region",
    dispatchType: "REGION",
    payload: mapPayload(regionsShort),
    defaultValue: "EUNE",
  },
  {
    id: uuidv4(),
    type: "Queue",
    dispatchType: "QUEUE",
    payload: [
      { type: "solo", name: "Solo/Duo" },
      { type: "flex", name: "Ranked Flex" },
    ],
    defaultValue: "Solo/Duo",
  },
];

const leaderboardFilters = [
  {
    id: uuidv4(),
    type: "Region",
    dispatchType: "REGION",
    payload: mapPayload(regions),
    defaultValue: "Europe Nordic & East",
  },
  {
    id: uuidv4(),
    type: "Queue",
    dispatchType: "QUEUE",
    payload: [
      { type: "solo", name: "Solo/Duo" },
      { type: "flex", name: "Ranked Flex" },
    ],
    defaultValue: "Solo/Duo",
  },
];

function mapPayload(regions) {
  const payload = [];

  Object.entries(regions).forEach(([key, value]) =>
    payload.push({ type: key, name: value })
  );

  return payload;
}

export { filters, leaderboardFilters, leaderboardFiltersShort };
