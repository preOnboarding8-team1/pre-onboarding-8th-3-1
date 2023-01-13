import styled from 'styled-components';

const Recommend = () => {
  return (
    <>
      <RecommendContainer>
        <SearchResult>
          <p>검색어 없음</p>
        </SearchResult>
      </RecommendContainer>
      <RecommendTitle>추천 검색어로 검색해 보세요.</RecommendTitle>
      <ButtonContainer>
        <RecommendButton>B형간염</RecommendButton>
        <RecommendButton>비만</RecommendButton>
        <RecommendButton>관절염</RecommendButton>
        <RecommendButton>우울증</RecommendButton>
        <RecommendButton>식도염</RecommendButton>
      </ButtonContainer>
    </>
  );
};

export default Recommend;

const RecommendContainer = styled.section`
  padding-left: 20px;
  border-bottom: 1px solid grey;
`;

const SearchResult = styled.div`
  font-size: 16px;
`;

const RecommendTitle = styled.p`
  padding-left: 20px;
  font-size: 12px;
  color: grey;
`;

const ButtonContainer = styled.div`
  margin-left: 20px;
`;

const RecommendButton = styled.button`
  height: 40px;
  margin-right: 10px;
  padding: 0 15px;
  border: 0;
  border-radius: 1.5em;
  background-color: #cae9fe;
  color: #017bea;
  cursor: pointer;
`;
