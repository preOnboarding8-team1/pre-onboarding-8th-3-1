import { HttpClient } from './HttpClient';
import { SearchServiceImpl } from './SearchService';

const httpClient = new HttpClient(`${process.env.REACT_APP_SERVER_URL}`);

export const getSearchResultsService = new SearchServiceImpl(httpClient);
