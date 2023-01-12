import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSearch } from '../api/search';
import useDebounce from '../hooks/useDebounce';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [keywords, setKeywords] = useState<any>();

  const debounceKeyword = useDebounce(keyword);

  useEffect(() => {
    const getKeyword = async () => {
      const result = await getSearch(debounceKeyword);
      setKeywords(result);
    };
    getKeyword();
  }, [debounceKeyword]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <SearchWrap>
      <InputContainer>
        <SearchInput type="text" placeholder="질환명을 입력해주세요." onChange={handleChangeInput} />
      </InputContainer>
      <SearchBtn>
        <svg viewBox="0 0 16 16" fill="#fff" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z" />
        </svg>
      </SearchBtn>
      <KeywordBox>
        <KeywordOn>
          <KeywordListBox>
            <KeywordList>
              {keyword && (
                <SearchKeyword>
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z" />
                  </svg>
                  <span style={{ color: '#111', fontWeight: '700' }}>{keyword}</span>
                </SearchKeyword>
              )}

              {keyword.length !== 0 && keywords?.data && (
                <>
                  <KeywordTitle>추천 검색어</KeywordTitle>
                  {keywords?.data.map((el) => {
                    return (
                      <SearchKeyword>
                        <svg
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z" />
                        </svg>
                        <span>{el.sickNm}</span>
                      </SearchKeyword>
                    );
                  })}
                </>
              )}
            </KeywordList>
          </KeywordListBox>
        </KeywordOn>
        {!keyword && (
          <KeywordOff>
            <KeywordTop>
              <KeywordTitle>최근 검색어</KeywordTitle>
              <KeywordList>
                <SearchKeyword>최근 검색어가 없습니다.</SearchKeyword>
                {/* <SearchKeyword>췌장암</SearchKeyword> */}
              </KeywordList>
            </KeywordTop>
            <Line />
            <KeywordBottom>
              <KeywordTitle>추천 검색어로 검색해보세요</KeywordTitle>
              <KeywordContainer>
                <RecommendKeyword>B형감염</RecommendKeyword>
                <RecommendKeyword>비만</RecommendKeyword>
                <RecommendKeyword>관절염</RecommendKeyword>
                <RecommendKeyword>우울증</RecommendKeyword>
                <RecommendKeyword>식도염</RecommendKeyword>
              </KeywordContainer>
            </KeywordBottom>
          </KeywordOff>
        )}
      </KeywordBox>
    </SearchWrap>
  );
};

export default SearchBar;

const SearchWrap = styled.div`
  width: 490px;
  margin: 0 auto;
  border: 2px solid #fff;
  background-color: #fff;
  border-radius: 48px;
  padding: 20px 10px 20px 24px;
  display: flex;
  justify-content: space-between;
  position: relative;
  :focus-within {
    border: 2px solid blue;
  }
`;

const InputContainer = styled.div`
  width: 430px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 24px;
  font-weight: 400;
  outline: none;
`;

const SearchBtn = styled.button`
  border: none;
  background-color: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #007be9;
  svg {
    width: 21px;
    height: 21px;
  }
`;

const KeywordBox = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  position: absolute;
  top: 100px;
  left: 0;
  background-color: #fff;
  padding: 20px 0;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
`;

const KeywordOn = styled.div``;
const KeywordOff = styled.div``;

const KeywordTop = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const KeywordTitle = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: gray;
  margin-bottom: 20px;
`;

const KeywordList = styled.div``;

const SearchKeyword = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 400;
  color: gray;
  margin: 0;
  &:not(:first-child) {
    margin-bottom: 10px;
  }

  svg {
    width: 15px;
  }

  span {
    cursor: pointer;
  }
`;

const KeywordListBox = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const KeywordBottom = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee7e7;
  margin: 30px 0;
`;

const KeywordContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const RecommendKeyword = styled.p`
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: rgba(173, 216, 230, 0.4);
  font-size: 15px;
  font-weight: 300;
  color: blue;
  border-radius: 30px;
`;