import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import SearchDropDown from '../components/SearchDropDown';

const Home = () => {
  const HOME_TITLE = '국내 모든 임상시험 검색하고 온라인으로 참여하기';

  return (
    <StyledHome>
      <StyledTitle>{HOME_TITLE}</StyledTitle>
      <SearchBar />
      <SearchDropDown />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  min-width: 100vw;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.skyblue};
`;

const StyledTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  width: 22rem;
  line-height: 2.3rem;
`;

export default Home;
