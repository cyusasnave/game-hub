import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRE } from "../data/constants";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenre = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRE,
    queryFn: apiClient.fetch,
    staleTime: ms("1 day"), // 24hours
    initialData: genres,
  });
};

export default useGenre;
