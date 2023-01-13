import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

interface SearchDropDownItemProps {
  sickNm: string;
  searchValue: string;
  className: string;
}

const SearchDropDownItem = ({ sickNm, searchValue, className }: SearchDropDownItemProps) => {
  const regex = new RegExp(`(${searchValue})`, 'gi');

  return (
    <StyledSearchDropDownItem className={className}>
      <BiSearch />
      {sickNm.split(regex).map((word, index) => (word === searchValue ? <strong key={index}>{word}</strong> : word))}
    </StyledSearchDropDownItem>
  );
};

const StyledSearchDropDownItem = styled.li`
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  overflow-wrap: break-word;
  .selected {
    background-color: lightgray;
  }
  > svg {
    font-size: 1.2rem;
    margin-right: 10px;
    color: ${({ theme }) => theme.color.gray};
  }
  > strong {
    font-weight: 700;
  }
`;

export default SearchDropDownItem;
