import { searchAPI } from '../api/searchAPI';
import { Result } from '../types/types';
import { useDebounce } from './useDebounce';

type UseGetResultsType = (searchQuery: string, setResults: React.Dispatch<React.SetStateAction<Result[]>>) => any;

export const useGetResults: UseGetResultsType = (searchQuery, setResults) => {
  const debouncer = useDebounce();
  let data: Result[] = JSON.parse(localStorage.getItem(searchQuery));

  const getResults = () => {
    debouncer(async () => {
      if (!data) {
        data = await searchAPI.getResult(`/sick?q=${searchQuery}
              `);
        localStorage.setItem(searchQuery, JSON.stringify(data));
      }

      setResults(data.slice(0, 10));
    }, 500);
  };

  return { getResults };
};
