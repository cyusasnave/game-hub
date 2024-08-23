import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRE } from "../data/constants";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRE,
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenre;
