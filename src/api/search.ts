import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const getSearch = (search: string) => {
  console.info('calling api');
  return axios.get(`${url}/sick?q=${search}`);
};
