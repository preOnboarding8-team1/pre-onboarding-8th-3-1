import styled from 'styled-components';
import { Result } from '../types/types';
import MagnifierIcon from './MagnifierIcon';

type SearchItemProps = {
  item: Result;
  query: string;
};

const SearchItem = ({ item, query }: SearchItemProps) => {
  const { sickCd, sickNm } = item;
  return (
    <SearchItemWrapper key={sickCd}>
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
  padding-bottom: 1rem;
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
