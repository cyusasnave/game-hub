import { FetchResponse } from "../services/api-client";

interface Data {
  id: number;
}

const useFindById = <T extends Data>(data: FetchResponse<T>, dataId?: number) =>
  data.results.find((item) => item.id === dataId);

export default useFindById;
