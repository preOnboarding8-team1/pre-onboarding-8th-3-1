import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropDown from '../components/DropDown';
import SearchBar from '../components/SearchBar';
import GlobalStyle from '../style/GlobalStyle';
import { Result } from '../types/types';

const Main = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [results, setResults] = useState<Result[]>();

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>
          국내 모든 임상시험 검색하고 <br />
          온라인으로 참여하기
        </Title>
        <SearchBar
          setIsDropDownOpen={setIsDropDownOpen}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setResults={setResults}
        />
        {isDropDownOpen && <DropDown searchValue={searchValue} setSearchValue={setSearchValue} results={results} />}
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;
`;
