import React from "react";
import styled from "styled-components";
import SearchBox from "../../components/search/SearchBox";

const Main = () => {
  return (
    <Wrapper>
      <SearchContent>
        <MainHeading>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </MainHeading>
        <SearchBox />
      </SearchContent>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const SearchContent = styled.div`
  width: 100%;
  height: 465px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #cae9ff;
`;

export const MainHeading = styled.h1`
  font-size: 2.125rem;
  text-align: center;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin-bottom: 40px;
`;

export default Main;
