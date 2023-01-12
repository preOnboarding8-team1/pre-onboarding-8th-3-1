import styled from 'styled-components';
import { SUGGESTIONS } from '../constants/constants';
import { Result } from '../types/types';
import MagnifierIcon from './MagnifierIcon';
import SearchItem from './SearchItem';

type DropDownProps = {
  searchQuery: string;
  results: Result[];
  selected: number;
  handleDropDownClick: (clickedOption: string) => void;
};

const DropDown = ({ searchQuery, results, selected, handleDropDownClick }: DropDownProps) => {
  return (
    <Wrapper>
      {searchQuery ? (
        <SearchResult>
          <SearchItemWrapper>
            <PlaceholderIcon>
              <MagnifierIcon />
            </PlaceholderIcon>
            <SearchValueText>{searchQuery}</SearchValueText>
          </SearchItemWrapper>

          {results.length > 0 && (
            <>
              <SectionTitle>추천 검색어</SectionTitle>

              <ResultList>
                {results?.map((result, idx) => (
                  <SearchItem
                    key={result.sickCd}
                    item={result}
                    query={searchQuery}
                    handleDropDownClick={handleDropDownClick}
                    idx={idx}
                    selected={selected}
                  />
                ))}
              </ResultList>
            </>
          )}
        </SearchResult>
      ) : (
        <>
          <SectionTitle>최근 검색어</SectionTitle>
          <NoRecentSearch>최근 검색어가 없습니다</NoRecentSearch>
          <Dividor />

          <SectionTitle>추천 검색어로 검색해보세요</SectionTitle>
          <Suggesstions>
            {SUGGESTIONS.map((suggestion) => (
              <SuggestionChip key={suggestion}>
                <SuggestionText>{suggestion}</SuggestionText>
              </SuggestionChip>
            ))}
          </Suggesstions>
        </>
      )}
    </Wrapper>
  );
};

export default DropDown;

const Wrapper = styled.div`
  width: 450px;
  margin-top: 0.5rem;
  padding: 1.2rem;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const SectionTitle = styled.span`
  color: var(--middle-gray);
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchItemWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;

const PlaceholderIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 1rem;
  color: var(--light-gray);
`;

const SearchValueText = styled.span``;

const ResultList = styled.div`
  display: flex;
  flex-direction: column;
`;

/* 검색어 없는 경우  */
const NoRecentSearch = styled.span`
  color: var(--light-gray);
`;

const Dividor = styled.hr`
  border-top: 1px solid var(--light-gray);
  margin: 1rem 0;
`;

const Suggesstions = styled.div`
  width: 100%;
  display: flex;
`;

const SuggestionChip = styled.div`
  background-color: var(--baby-blue);
  margin-right: 1rem;
  padding: 0.6rem;
  border-radius: 50px;
`;

const SuggestionText = styled.span`
  color: var(--main-blue);
  font-weight: 600;
`;
