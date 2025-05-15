import { riotInstance } from "../utils/axios.js";
import { useQuery } from "@tanstack/react-query";

const fetchChampionRotation = async () => {
  const response = await riotInstance.get(`rotation/eun1`);
  return response.data;
};

const useChampionRotation = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["championRotation"],
    queryFn: fetchChampionRotation,
  });

  return { data, isLoading, isError };
};

export default useChampionRotation;
