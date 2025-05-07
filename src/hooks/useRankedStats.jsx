import { riotInstance } from "../utils/axios.js";
import { useQuery } from "@tanstack/react-query";

const fetchRankedStats = async (puuid, region) => {
  const response = await riotInstance.get(`/ranked/${region}/${puuid}`);
  return response.data;
};

const useRankedStats = (puuid, region) => {
  const {
    data: rankedStats,
    error,
    isLoading,
    isFetching,
    status,
  } = useQuery({
    queryKey: ["ranked", puuid, region],
    queryFn: () => fetchRankedStats(puuid, region),
    enabled: !!puuid && !!region,
  });

  return { rankedStats, error, isLoading, isFetching, status };
};

export default useRankedStats;
