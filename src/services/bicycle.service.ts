import { AxiosResponse } from "axios";

import { urls } from "../constants";
import { IBicycle, IBicycleData } from "../intefaces";
import { apiService } from "./api.service";

type IRes<T> = Promise<AxiosResponse<T>>;
const bicycleService = {
  getAll: (): IRes<IBicycle[]> => apiService.get(urls.base).then(),

  getById: (id: string | number): IRes<IBicycle> =>
    apiService.get(urls.byId(id)).then(),

  create: (bicycleData: IBicycleData): IRes<IBicycle> =>
    apiService.post(urls.base, bicycleData).then(),

  delete: (bicycleId: string | number): IRes<void> =>
    apiService.delete(urls.byId(bicycleId)).then(),
};

export { bicycleService };
