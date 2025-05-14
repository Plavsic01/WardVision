import { riotInstance } from "../utils/axios.js";
import { useQuery } from "@tanstack/react-query";

const fetchLeaderboardSummoner = async (puuid) => {
  const response = await riotInstance.get(`summoner/${puuid}`);
  return response.data;
};

const useLeaderboardSummoner = (puuid) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["leaderboardSummoner", puuid],
    queryFn: () => fetchLeaderboardSummoner(puuid),
    placeholderData: { gameName: "N/A", tagLine: "N/A" },
  });

  return { data, isLoading, isError };
};

export default useLeaderboardSummoner;
