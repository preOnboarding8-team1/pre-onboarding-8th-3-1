import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getSearchResultsService } from '../api';
import { searchValueState } from '../states/searchValueState';
import { suggestionsState } from '../states/suggestionsState';
import { ICache } from '../types';

export const useGetSuggestions = () => {
  const searchValue = useRecoilValue(searchValueState);
  const [suggestions, setSuggestions] = useRecoilState(suggestionsState);
  const [cachedSuggestions, setCachedSuggestions] = useState<ICache>({});
  const [isLoading, setIsLoading] = useState(false);
  const regex = /^[0-9a-zA-Z가-힣]+$/;

  useEffect(() => {
    if (searchValue.length > 0 && regex.test(searchValue)) {
      getSuggestions(searchValue);
    }
  }, [searchValue]);

  const getSuggestions = async (value: string) => {
    setIsLoading(true);
    if (cachedSuggestions[value]) {
      setSuggestions(cachedSuggestions[value]);
    } else {
      const data = await getSearchResultsService.search(value);
      setSuggestions(data);
      setCachedSuggestions({
        ...cachedSuggestions,
        [value]: data,
      });
    }
    setIsLoading(false);
  };

  return {
    searchValue,
    suggestions,
    isLoading,
  };
};
