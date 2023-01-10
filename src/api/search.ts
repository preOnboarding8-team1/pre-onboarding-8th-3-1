import axios from 'axios';

const url = process.env.REACT_APP_SERVER_URL;
export const getRecommended = (q: string) => axios.get(`${url}/sick?q=${q}`);
