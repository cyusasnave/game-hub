import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery({
    queryKey:
      Object.keys(gameQuery).length > 0 ? ["games", gameQuery] : ["games"],
    queryFn: ({ pageParam }) =>
      apiClient.fetch({
        params: {
          page: pageParam,
          genres: gameQuery?.genreId,
          parent_platforms: gameQuery?.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: ms("1 day"), // 24 hours
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.results.length > 0 ? pages.length + 1 : undefined,
  });
};

export default useGames;
