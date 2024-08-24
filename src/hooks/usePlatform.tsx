import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../data/constants";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: apiClient.fetch,
    staleTime: ms("1 day"),
    initialData: platforms,
  });

export default usePlatform;
