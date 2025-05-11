import Filter from "./Filter";
import filters from "../../utils/filterData";
import { useState } from "react";

const Filters = () => {
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
          handleSelectedFilter={handleSelectedFilter}
        />
      ))}
    </section>
  );
};

export default Filters;
