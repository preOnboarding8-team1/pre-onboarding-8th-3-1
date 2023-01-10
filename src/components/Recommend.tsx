import React from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const Recommend = ({ searchTerm, isLoading, select, query }) => {
  return (
    <RecommendComponents>
      {isLoading ? (
        <Loading />
      ) : searchTerm && searchTerm.length ? (
        searchTerm.map((recommended, idx) => {
          const rec = recommended.sickNm.split(query);
          return (
            <Text key={recommended.sickCd} className={idx === select ? 'select' : ''}>
              {rec.map((str, idx) =>
                idx > 0 ? (
                  <div key={str}>
                    <HighLight>{query}</HighLight>
                    {str}
                  </div>
                ) : (
                  <div key={str}>{str}</div>
                )
              )}
            </Text>
          );
        })
      ) : (
        <Text>검색결과 없음</Text>
      )}
    </RecommendComponents>
  );
};

const RecommendComponents = styled.div`
  min-height: 60px;
  border: 1px solid #000;
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .select {
    background: #d9d9d9;
  }
`;
const Text = styled.div`
  height: 33px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 14px;
`;
const HighLight = styled.b`
  font-weight: 800;
`;

export default Recommend;
