import { useCallback, useEffect, useState, useRef } from "react";
import { riotInstance } from "../utils/axios.js";
import { regionsShort } from "../utils/regions.js";

const useSummoner = (region, summonerName, delay = 0) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const isFirstRender = useRef(true);

  const fetch = useCallback(async () => {
    try {
      setIsLoading(true);
      if (summonerName.trim().length === 0) return;

      const [gameName, gameTag] = summonerName.split("-");

      const tagLine = gameTag ?? regionsShort[region];

      const response = await riotInstance.get(
        `summoner/${region}/${gameName}/${tagLine}`
      );
      setData(response.data);
    } catch (error) {
      setData({});
      setIsLoading(false);
      setIsError(true);
      if (error.response && error.response.status === 404) {
        console.clear();
      }
    }
    setIsLoading(false);
  }, [summonerName, region]);

  useEffect(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
      return;
    }
    setData({});
    const timer = setTimeout(async () => {
      await fetch();
    }, delay);
    return () => clearTimeout(timer);
  }, [fetch, delay]);

  return { data, isLoading, isError };
};

export default useSummoner;
