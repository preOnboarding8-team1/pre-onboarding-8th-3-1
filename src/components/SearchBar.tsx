import { ChangeEvent, KeyboardEvent } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { searchValueState } from '../states/searchValueState';
import { selectedIndexState } from '../states/selectedIndexState';
import { suggestionsState } from '../states/suggestionsState';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState);
  const suggestions = useRecoilValue(suggestionsState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSelectedIndex(-1);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'ArrowDown') {
      if (selectedIndex < suggestions.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
      return;
    }
    if (e.key === 'ArrowUp') {
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    }
    if (e.key === 'Enter' && selectedIndex !== -1) {
      setSearchValue(suggestions[selectedIndex].sickNm);
      setSelectedIndex(-1);
    }
  };

  return (
    <StyledSearchBar onSubmit={(e) => e.preventDefault()}>
      <SearchIcon />
      <StyledInput
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="질환명을 입력해 주세요"
      />
      <StyledButton type="submit">
        <BiSearch size="2rem" />
      </StyledButton>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.form`
  width: 30rem;
  height: 5rem;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px;
  padding-left: 55px;
  padding-right: 75px;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 42px;
  border: 1px solid ${({ theme }) => theme.color.skyblue};
  background-color: ${({ theme }) => theme.color.white};
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 12px;
  right: 10px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  border: 0;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`;

const SearchIcon = styled(BiSearch)`
  font-size: 1.3rem;
  position: absolute;
  top: 30px;
  left: 25px;
  color: ${({ theme }) => theme.color.gray};
`;

export default SearchBar;
