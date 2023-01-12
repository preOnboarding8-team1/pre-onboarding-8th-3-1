import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from '../../UI/Card';
import { RecommendItemType } from '../Models/RecommendItemTypes';
import RecommendItem from './RecommendItem';
import DataContext from '../../store/data-context';
import SelectContext from '../../store/select-context';

const RecommendItemBox = () => {
  const dataCtx = useContext(DataContext);
  const selectCtx = useContext(SelectContext);

  let RecommendItemList;

  if (dataCtx.recommendItemList.length === 0) {
    RecommendItemList = <NotingDiv>검색어 없음</NotingDiv>;
  } else {
    RecommendItemList = dataCtx.recommendItemList.map((item: RecommendItemType, index) => (
      <RecommendItem
        key={item.sickCd}
        sickName={item.sickNm}
        boldString={dataCtx.searchedKeyword}
        isSelected={index === selectCtx.selectedNumber}
      />
    ));
  }

  return (
    <RecommendItemBoxWrapper>
      <Card>
        <RecommendItemBoxText>추천 검색어</RecommendItemBoxText>
        {RecommendItemList}
      </Card>
    </RecommendItemBoxWrapper>
  );
};

const RecommendItemBoxWrapper = styled.div`
  position: relative;
  top: 130px;
  width: 500px;
  height: 500px;
  margin: auto;
`;

const RecommendItemBoxText = styled.h5`
  padding: 10px;
  font-size: 13px;
  color: gray;
`;

const NotingDiv = styled.div`
  padding: 10px;
`;

export default RecommendItemBox;
