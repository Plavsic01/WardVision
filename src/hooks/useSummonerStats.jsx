import { regionsShort } from "../utils/regions.js";
import { riotInstance } from "../utils/axios.js";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchSummonerStats = async (region, summonerName) => {
  if (summonerName.trim().length === 0) return;

  const [gameName, gameTag] = summonerName.split("-");

  const tagLine = gameTag ?? regionsShort[region];

  const response = await riotInstance.get(
    `summoner/${region}/${gameName}/${tagLine}`
  );
  return response;
};

const useSummonerStats = (region, summonerName, delay = 0) => {
  const query = useQuery({
    queryKey: ["summonerStats", region, summonerName, delay],
    queryFn: () => fetchSummonerStats(region, summonerName, delay),
    enabled: false,
    initialData: {},
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      query.refetch();
    }, delay);

    return () => clearTimeout(timeout);
  }, [summonerName, region, delay]);

  return {
    data: query.data?.data ?? {},
    isLoading: query.isLoading,
    isFetching: query.isFetching,
  };
};

export default useSummonerStats;
