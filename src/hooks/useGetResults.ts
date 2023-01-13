import { useState } from 'react';
import { searchAPI } from '../api/searchAPI';
import { Result } from '../types/types';
import { useDebounce } from './useDebounce';

type UseGetResultsReturn = {
  getResults: () => void;
  isLoading: boolean;
};

type UseGetResultsType = (
  searchQuery: string,
  setResults: React.Dispatch<React.SetStateAction<Result[]>>
) => UseGetResultsReturn;

export const useGetResults: UseGetResultsType = (searchQuery, setResults) => {
  const debouncer = useDebounce();
  let data: Result[] = JSON.parse(localStorage.getItem(searchQuery));
  const [isLoading, setIsLoading] = useState(false);

  const getResults = () => {
    setIsLoading(true);
    debouncer(async () => {
      if (!data) {
        data = await searchAPI.getResult(`/sick?q=${searchQuery}
              `);
        localStorage.setItem(searchQuery, JSON.stringify(data));
      }

      setResults(data.slice(0, 10));
      setIsLoading(false);
    }, 500);
  };

  return { getResults, isLoading };
};
