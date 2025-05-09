import { riotInstance } from "../utils/axios.js";
import { useQuery } from "@tanstack/react-query";

const fetchChampionStats = async (championName) => {
  const response = await riotInstance.get(`/champions/${championName}`);
  return response.data;
};

const useChampionStats = (championName) => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["champion", championName],
    queryFn: () => fetchChampionStats(championName),
    enabled: !!championName,
  });

  return { data, isLoading, isError, status };
};

export default useChampionStats;
