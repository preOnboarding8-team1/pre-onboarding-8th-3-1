import styled from 'styled-components';
import { SUGGESTIONS } from '../constants/constants';
import MagnifierIcon from './MagnifierIcon';

export type DropDownProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const DropDown = ({ searchValue, setSearchValue }: DropDownProps) => {
  return (
    <Wrapper>
      <SectionTitle>최근 검색어</SectionTitle>
      {searchValue ? (
        <SearchResult>
          <PlaceholderIcon>
            <MagnifierIcon />
          </PlaceholderIcon>
          <SearchResultText>{searchValue}</SearchResultText>
        </SearchResult>
      ) : (
        <>
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
  width: 100%;
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
  margin-bottom: 1rem;
`;

const SearchResult = styled.div`
  display: flex;
`;

const PlaceholderIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 1rem;
  color: var(--light-gray);
`;
const SearchResultText = styled.span`
  font-weight: 600;
`;

const NoRecentSearch = styled.span`
  color: var(--light-gray);
`;

const Dividor = styled.hr`
  border-top: 1px solid var(--light-gray);
  margin: 2rem 0;
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
