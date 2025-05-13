import Filter from "./Filter";
import { memo, useState } from "react";

const Filters = ({ dispatch, filters }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSelectedFilter = (filterType) => {
    setSelectedFilter((prev) => (prev === filterType ? "" : filterType));
  };

  return (
    <section className="mb-6 flex flex-wrap justify-center text-white gap-2">
      {filters.map((filter) => (
        <Filter
          key={filter.id}
          {...filter}
          selectedFilter={selectedFilter}
          dispatch={dispatch}
          handleSelectedFilter={handleSelectedFilter}
        />
      ))}
    </section>
  );
};

export default memo(Filters);
