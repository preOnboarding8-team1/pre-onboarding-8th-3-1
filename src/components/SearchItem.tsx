import React from 'react';
import styled from 'styled-components';
import { Result } from '../types/types';
import MagnifierIcon from './MagnifierIcon';

type SearchItemProps = {
  item: Result;
  idx: number;
  selected: number;
  query: string;
  handleDropDownClick: (clickedOption: string) => void;
};

const SearchItem = ({ item, idx, selected, query, handleDropDownClick }: SearchItemProps) => {
  const { sickCd, sickNm } = item;
  return (
    <SearchItemWrapper
      key={sickCd}
      onClick={() => handleDropDownClick(sickNm)}
      className={selected === idx ? 'selected' : ''}>
      <PlaceholderIcon>
        <MagnifierIcon />
      </PlaceholderIcon>
      <span>
        {sickNm.includes(query) ? (
          <>
            {sickNm.split(query)[0]}
            <MatchingText>{query}</MatchingText>
            {sickNm.split(query)[1]}
          </>
        ) : (
          sickNm
        )}
      </span>
    </SearchItemWrapper>
  );
};

export default SearchItem;

const SearchItemWrapper = styled.div`
  display: flex;
  padding: 0.7rem;
  cursor: pointer;
  align-items: center;
  transition: all 0.1s ease-in-out;

  :hover {
    background-color: var(--baby-blue);
  }

  &.selected {
    background-color: var(--baby-blue);
  }
`;

const PlaceholderIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 1rem;
  color: var(--light-gray);
`;

const MatchingText = styled.span`
  font-weight: 600;
  color: var(--main-blue);
`;
