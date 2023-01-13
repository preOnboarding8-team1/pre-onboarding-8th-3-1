import React from "react";
import * as S from "../../styles/search.style";
import { SearchParams, SearchRelatedKeywords } from "./SearchBox";

type SearchResultProps = {
  keyword: SearchParams;
  relatedKeywords: SearchRelatedKeywords[];
};

const SearchResult = ({ keyword, relatedKeywords }: SearchResultProps) => {
  return (
    <S.RelatedSearchWrapper>
      <S.RelatedSearchKeyword>{keyword.q}</S.RelatedSearchKeyword>
      <S.RelatedSearchContentHeading>추천 검색어</S.RelatedSearchContentHeading>
      {relatedKeywords.map((keyword) => (
        <S.RelatedSearchKeyword key={keyword.sickCd}>{keyword.sickNm}</S.RelatedSearchKeyword>
      ))}
    </S.RelatedSearchWrapper>
  );
};

export default SearchResult;
