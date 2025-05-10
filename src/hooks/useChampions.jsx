import { riotInstance } from "../utils/axios.js";
import { useQuery } from "@tanstack/react-query";

const fetchChampions = async () => {
  const response = await riotInstance.get(`champions`);
  return response.data;
};

const useChampions = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampions,
  });

  return { data, isLoading, isError };
};

export default useChampions;
