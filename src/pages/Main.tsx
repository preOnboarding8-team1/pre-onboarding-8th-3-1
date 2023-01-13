import { useState } from 'react';
import styled from 'styled-components';
import DropDown from '../components/DropDown';
import SearchBar from '../components/SearchBar';
import GlobalStyle from '../style/GlobalStyle';
import { Result } from '../types/types';

const Main = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Result[]>();
  const [selected, setSelected] = useState(-1);
  const [recentKeywords, setRecentKeywords] = useState(['']);

  const handleDropDownClick = (clickedOption) => {
    setSearchQuery(clickedOption);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && results.length - 1 > selected) {
      setSelected(selected + 1);
    }
    if (e.key === 'ArrowUp' && selected >= 0) {
      setSelected(selected - 1);
    }
    if (e.key === 'Enter' && selected >= 0) {
      handleDropDownClick(results[selected].sickNm);
      setSelected(-1);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper onKeyUp={handleKeyUp}>
        <Title>
          국내 모든 임상시험 검색하고 <br />
          온라인으로 참여하기
        </Title>
        <SearchBar
          setIsDropDownOpen={setIsDropDownOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setResults={setResults}
          setRecentKeywords={setRecentKeywords}
        />
        {isDropDownOpen && (
          <DropDown
            searchQuery={searchQuery}
            results={results}
            selected={selected}
            handleDropDownClick={handleDropDownClick}
            recentKeywords={recentKeywords}
          />
        )}
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
