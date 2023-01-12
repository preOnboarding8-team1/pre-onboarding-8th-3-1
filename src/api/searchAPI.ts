import { httpClient } from '../utils/httpClient';

export const searchAPI = {
  getResult: (url: string) => {
    return httpClient.get(url).then((res) => res.data);
  },
};
