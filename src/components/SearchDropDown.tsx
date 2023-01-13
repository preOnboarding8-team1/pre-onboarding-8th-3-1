import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useGetSuggestions } from '../hooks/useGetSuggestions';
import { selectedIndexState } from '../states/selectedIndexState';
import SearchDropDownItem from './SearchDropDownItem';

const SearchDropDown = () => {
  const { searchValue, suggestions, isLoading } = useGetSuggestions();
  const selectedIndex = useRecoilValue(selectedIndexState);
  const infoText = isLoading ? '검색 중...' : suggestions ? '추천 검색어' : '검색어 없음';

  return searchValue ? (
    <StyledSearchDropDown>
      <span>{infoText}</span>
      {suggestions?.map(({ sickCd, sickNm }, index) => (
        <SearchDropDownItem
          key={sickCd}
          sickNm={sickNm}
          searchValue={searchValue}
          className={index === selectedIndex ? 'selected' : ''}
        />
      ))}
    </StyledSearchDropDown>
  ) : null;
};

const StyledSearchDropDown = styled.ul`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.white};
  width: 40rem;
  margin-top: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  > p {
    font-size: 0.8rem;
    padding-left: 1rem;
    color: ${({ theme }) => theme.color.gray};
    margin-bottom: 5px;
  }
`;

export default SearchDropDown;
