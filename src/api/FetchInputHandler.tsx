import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:4000/sick',
};

const client = axios.create(axiosConfig);

const FetchInputHandler = async (query: string) => {
  const cachedData = await localStorage.getItem(query);
  if (cachedData) {
    // eslint-disable-next-line
    console.log('캐시된 데이터 호출');
    return JSON.parse(cachedData);
  }
  const response = await client.get(`?q=${query}`);
  const dataParser = JSON.stringify(response.data);
  await localStorage.setItem(query, dataParser);
  // eslint-disable-next-line
  console.info('calling api');
  return response.data;
};

export default FetchInputHandler;
