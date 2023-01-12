import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGetResults } from '../hooks/useGetResults';
import { Result } from '../types/types';
import MagnifierIcon from './MagnifierIcon';

export type SearchBarProps = {
  searchQuery: string;
  setIsDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
};

const SearchBar = ({ setIsDropDownOpen, searchQuery, setSearchQuery, setResults }: SearchBarProps) => {
  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const { getResults } = useGetResults(searchQuery, setResults);

  useEffect(getResults, [searchQuery]);

  return (
    <Wrapper>
      <Input
        placeholder="질환명을 입력해 주세요."
        onFocus={() => setIsDropDownOpen(true)}
        // onBlur={() => setIsDropDownOpen(false)}
        value={searchQuery}
        onChange={handleChangeQuery}
      />
      <PlaceholderIcon>
        <MagnifierIcon />
      </PlaceholderIcon>

      <BtnSearch>
        <BtnSearchIcon>
          <MagnifierIcon />
        </BtnSearchIcon>
      </BtnSearch>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.form`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const PlaceholderIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  left: 20px;
  color: var(--light-gray);
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem 6rem 1.2rem 3rem;
  font-size: 1.2rem;
  background-color: white;
  border-radius: 50px;
  border: 2px solid transparent;
  outline: none;

  ::placeholder {
    font-size: 1rem;
    color: var(--light-gray);
  }

  :focus + ${PlaceholderIcon} {
    display: none;
  }

  :focus {
    padding: 1.2rem 6rem 1.2rem 1.5rem;
    ::placeholder {
      visibility: hidden;
    }

    border: 2px solid var(--main-blue);
  }
`;

const BtnSearch = styled.button`
  padding: 0.5rem;
  background-color: var(--main-blue);
  border: none;
  border-radius: 50%;
  position: absolute;
  right: 15px;
`;

const BtnSearchIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`;
