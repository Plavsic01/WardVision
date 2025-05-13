import { riotInstance } from "../utils/axios.js";
import { useQuery } from "@tanstack/react-query";

const fetchLeaderboard = async (region, gameType) => {
  const response = await riotInstance.get(`leaderboard/${region}/${gameType}`);
  return response.data;
};

const useLeaderboard = (region, gameType) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["leaderboard", region, gameType],
    queryFn: () => fetchLeaderboard(region, gameType),
    enabled: !!region && !!gameType,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 10,
  });

  return { data, isLoading, isError };
};

export default useLeaderboard;
