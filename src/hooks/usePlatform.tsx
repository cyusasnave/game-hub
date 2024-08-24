import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../data/constants";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: apiClient.fetch,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatform;
