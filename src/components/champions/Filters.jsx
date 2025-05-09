import { ChevronDown } from "lucide-react";

const Filters = () => {
  return (
    <section className="mb-6 flex flex-wrap justify-center text-white gap-2">
      <div className="flex items-center px-2 py-2 text-sm text-white bg-[#1e2130] rounded-md">
        <span className="text-white text-sm mr-2">Role:</span>
        <button className="flex items-center">
          All
          <ChevronDown className="p-1" />
        </button>
      </div>
      <div className="flex items-center px-2 py-2 text-sm text-white bg-[#1e2130] rounded-md">
        <span className="text-white text-sm mr-2">Difficulty:</span>
        <button className="flex items-center">
          All
          <ChevronDown className="p-1" />
        </button>
      </div>
      <div className="flex items-center px-2 py-2 text-sm text-white bg-[#1e2130] rounded-md">
        <span className="text-white text-sm mr-2">Sort By:</span>
        <button className="flex items-center">
          Name
          <ChevronDown className="p-1" />
        </button>
      </div>
    </section>
  );
};

export default Filters;
