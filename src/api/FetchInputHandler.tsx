// @TODO axios를 사용해서 서버에 문자열 데이터를 요청하고 리턴받는 함수를 만든다.
// 요청하는 문자열 데이터가 cache store에 존재한다면 서버에 쿼리를 요청하는 대신 store에서 데이터를 꺼내 리턴한다.
import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:4000/sick',
};

const client = axios.create(axiosConfig);

const FetchInputHandler = async (query: string) => {
  // @TODO 검색한 데이터를 저장하는 store 구현
  const cachedData = await localStorage.getItem(query)
  if(cachedData){
    console.log("캐시된 데이터 호출")
    return JSON.parse(cachedData)
  }
  const response = await client.get(`?q=${query}`);
  const dataParser = JSON.stringify(response.data)
  await localStorage.setItem(query, dataParser)
  console.info("calling api")
  return response.data;
};

export default FetchInputHandler;
