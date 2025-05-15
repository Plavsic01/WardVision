import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LIMIT = 10;

const LeaderboardPagination = ({ data, handleCurrentData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const overallPages = Math.ceil(data.length / LIMIT);

  const startIndex = (currentPage - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;

  const handleNextPage = () => {
    if (currentPage !== overallPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    handleCurrentData(data.slice(startIndex, endIndex));
  }, [data, currentPage]);

  // #4a7dff BOJA ZA IZABRANU STRANU

  return (
    <div className="flex items-center justify-between px-3 py-2 text-white bg-[#2a2a3a] rounded-b-lg">
      <div className="text-gray-400 text-xs">
        Page <span className="text-white font-medium">{currentPage}</span> of{" "}
        <span className="text-white font-medium">{overallPages}</span>
      </div>
      <div className="flex items-center justify-center space-x-1">
        <button
          className="bg-[#1e2130] rounded-md cursor-pointer"
          onClick={handlePreviousPage}
        >
          <ChevronLeft className="p-1" />
        </button>

        <button className="bg-[#1e2130] rounded-md px-2 cursor-pointer">
          {currentPage - 1 !== 0 ? (
            currentPage - 1
          ) : (
            <span className="px-px">&nbsp;</span>
          )}
        </button>

        <button className="bg-[#4a7dff] rounded-md px-2 cursor-pointer">
          {currentPage}
        </button>

        <button className="bg-[#1e2130] rounded-md px-2 cursor-pointer">
          {currentPage + 1 <= overallPages ? (
            currentPage + 1
          ) : (
            <span className="px-px">&nbsp;</span>
          )}
        </button>

        <button className="bg-[#1e2130] rounded-md cursor-pointer">
          <ChevronRight className="p-1" onClick={handleNextPage} />
        </button>
      </div>
    </div>
  );
};

export default LeaderboardPagination;
