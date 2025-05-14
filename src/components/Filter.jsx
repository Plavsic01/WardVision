import { ChevronDown } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Filter = ({
  type,
  payload,
  defaultValue,
  dispatchType,
  dispatch,
  selectedFilter,
  handleSelectedFilter,
}) => {
  const [chosenFilter, setChosenFilter] = useState(defaultValue);

  return (
    <div className="relative flex items-center px-2 py-2 text-sm text-white bg-[#1e2130] rounded-md">
      <span className="text-white text-sm mr-2">{type}:</span>
      <button
        className="flex items-center cursor-pointer"
        onClick={() => {
          handleSelectedFilter(type);
        }}
      >
        {chosenFilter}
        <ChevronDown className="p-1" />
      </button>
      {selectedFilter === type && (
        <div className="absolute top-10 left-0 z-100">
          <div className="bg-[#1C1C1F] rounded-md">
            {payload.map((item) => (
              <button
                key={uuidv4()}
                className="bg-[#28344e] w-full mb-px px-2 py-2 cursor-pointer hover:bg-[#282830]"
                onClick={() => {
                  dispatch({ type: dispatchType, payload: item.type });
                  setChosenFilter(item.name);
                  handleSelectedFilter("");
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
