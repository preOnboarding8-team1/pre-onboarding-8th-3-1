import React, { useState } from "react";
import * as S from "../../styles/search.style";
import api from "../../axios/search";
import SearchResultBox from "./SearchResultBox";

export type SearchParams = {
  q: string;
};

export interface SearchRelatedKeywords {
  sickCd: string;
  sickNm: string;
}

const SearchBox = () => {
  const [keyword, setKeyword] = useState<SearchParams>({ q: "" });
  const [relatedKeywords, setRelatedKeywords] = useState<SearchRelatedKeywords[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword({ ...keyword, q: event.target.value });

    if (event.target.value !== "") {
      getRelatedKeywords({ ...keyword, q: event.target.value });
    } else {
      setRelatedKeywords([]);
    }
  };

  const getRelatedKeywords = async (keyword: SearchParams) => {
    const isExistCachedList = getLocalstorageItem(keyword.q);

    if (!isExistCachedList) {
      const res = await api.getKeywords(keyword);

      if (res.status === 200 && res.data.length > 0) {
        setRelatedKeywords([...res.data]);
        setLocalStorageItem(keyword.q, res.data);
      }
    }
  };

  const getLocalstorageItem = (key: string): boolean => {
    const cachedList = JSON.parse(localStorage.getItem(key));

    if (cachedList) {
      setRelatedKeywords([...cachedList]);
      return true;
    }

    return false;
  };

  const setLocalStorageItem = (key: string, list: SearchRelatedKeywords[]) => {
    localStorage.setItem(key, JSON.stringify(list));

    return setTimeout(() => {
      localStorage.removeItem(key);
    }, 10000);
  };

  return (
    <S.SearchBoxWrapper>
      <S.SearchBoxContent>
        <S.SearchBoxInputWrapper>
          <S.SearchBoxInput onChange={handleChange} />
        </S.SearchBoxInputWrapper>
        <S.SearchBoxButton />
      </S.SearchBoxContent>
      {relatedKeywords.length > 0 && <SearchResultBox keyword={keyword} relatedKeywords={relatedKeywords} />}
    </S.SearchBoxWrapper>
  );
};

export default SearchBox;
