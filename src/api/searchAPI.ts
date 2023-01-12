import { httpClient } from '../utils/httpClient';

export const searchAPI = {
  getResult: (url: string) => {
    console.info('calling api');
    return httpClient.get(url).then((res) => res.data);
  },
};
