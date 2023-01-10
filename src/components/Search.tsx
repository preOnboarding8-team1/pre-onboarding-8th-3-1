import React, { useState, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import Recommend from './Recommend';
import { getRecommended } from '../api/search';
import { Recommended } from '../types';

const Search = () => {
  interface Cache {
    query: string;
    recommended: Recommended[];
  }
  type Callback = (...args: string[]) => void;

  const [query, setQuery] = useState<string>('');
  const [cache, setCache] = useState<Cache[]>([]);
  const [searchTerm, setSearchTerm] = useState<Recommended[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [select, setSelect] = useState<number>();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const debounceFunction = (callback: Callback, delay = 500) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };
  const debounceOnChange = debounceFunction((value: string) => {
    setQuery(value);
    search(value);
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceOnChange(e.target.value);
  };

  const getSearchTermList = async (q: string = query) => {
    try {
      const res = await getRecommended(q);
      console.info('calling api');
      return res.data;
    } catch (e) {
      // TODO: ERROR
    }
  };

  const search = async (q: string = query) => {
    setIsLoading(true);
    if (q.length) {
      const caching = cache.filter((cacheItem) => cacheItem.query === q);
      if (caching.length) {
        const newSearchTerm = caching[0].recommended;
        setSearchTerm(newSearchTerm);
      } else {
        const recommended = await getSearchTermList(q);
        const newCacheData = { query: q, recommended };
        const result = [...cache, newCacheData];
        setCache(result);
        setSearchTerm(recommended);
      }
    } else {
      setSearchTerm([]);
    }
    setIsLoading(false);
  };

  const handleOnSubmit = (e: React.MouseEvent | React.MouseEvent) => {
    e.preventDefault();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' && (select as number) < searchTerm.length - 1) {
      const newSelect = select === null ? 0 : (select as number) + 1;
      setSelect(newSelect);
      (inputRef.current as HTMLInputElement).value = searchTerm[newSelect].sickNm;
    } else if (e.key === 'ArrowUp' && (select as number) > 0) {
      const newSelect = select === null ? 0 : (select as number) - 1;
      setSelect(newSelect);
      (inputRef.current as HTMLInputElement).value = searchTerm[newSelect].sickNm;
    }
  };

  const handleOnFocus = () => setIsFocus(true);
  const handleOnBlur = () => setIsFocus(false);
  return (
    <SearchComponent>
      <Form onSubmit={handleOnSubmit}>
        <Input
          defaultValue={query}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <Icon>
          <AiOutlineSearch onClick={handleOnSubmit} />
        </Icon>
        {isFocus && <Recommend searchTerm={searchTerm} isLoading={isLoading} select={select} query={query} />}
      </Form>
    </SearchComponent>
  );
};

export default Search;

const SearchComponent = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  height: 40px;
  position: relative;
`;
const Input = styled.input`
  width: 586px;
  height: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 45px 0 20px;
`;
const Icon = styled.div`
  height: 100%;
  position: absolute;
  font-size: 28px;
  top: 6px;
  right: 15px;
  cursor: pointer;
`;
