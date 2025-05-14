import { useEffect, useState } from "react";

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

  return (
    <div className="text-white">
      <h1>Current Page: {currentPage}</h1>
      <button onClick={handlePreviousPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default LeaderboardPagination;
