import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRE } from "../data/constants";
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenre = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRE,
    queryFn: apiClient.fetch,
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: genres,
  });
};

export default useGenre;
