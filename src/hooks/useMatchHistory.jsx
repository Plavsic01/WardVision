import { riotInstance } from "../utils/axios.js";
import { useQuery } from "@tanstack/react-query";

const fetchMatchHistory = async (puuid, region) => {
  const response = await riotInstance.get(
    `/match-history/${region}/${puuid}/0/15`
  );
  return response.data;
};

const useMatchHistory = (puuid, region) => {
  const {
    data: matchHistory,
    isError,
    isLoading,
    isFetching,
    status,
  } = useQuery({
    queryKey: ["matchHistory", puuid, region],
    queryFn: () => fetchMatchHistory(puuid, region),
    enabled: !!puuid && !!region,
  });

  return { matchHistory, isError, isLoading, isFetching, status };
};

export default useMatchHistory;
