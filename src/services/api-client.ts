import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});
