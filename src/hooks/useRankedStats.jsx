import { riotInstance } from "../utils/axios.js";
import { useQuery } from "@tanstack/react-query";

const fetchRankedStats = async (puuid, region) => {
  const response = await riotInstance.get(`ranked/${region}/${puuid}`);
  return response.data;
};

const useRankedStats = (puuid, region) => {
  const {
    data: rankedStats,
    isError,
    isLoading,
    isFetching,
    status,
  } = useQuery({
    queryKey: ["ranked", puuid, region],
    queryFn: () => fetchRankedStats(puuid, region),
    enabled: !!puuid && !!region,
  });

  return { rankedStats, isError, isLoading, isFetching, status };
};

export default useRankedStats;
