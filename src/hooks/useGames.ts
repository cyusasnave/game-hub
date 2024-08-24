import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
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

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey:
      Object.keys(gameQuery).length > 0 ? ["games", gameQuery] : ["games"],
    queryFn: ({ pageParam }) =>
      apiClient.fetch({
        params: {
          page: pageParam,
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.results.length > 0 ? pages.length + 1 : undefined,
  });

export default useGames;
