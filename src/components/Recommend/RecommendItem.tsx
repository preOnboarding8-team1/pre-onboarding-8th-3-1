import React from 'react';
import styled from 'styled-components';
import { RecommendItemProps } from '../Models/RecommendItemTypes';
import searchIcon from '../../assets/search_white.png';

const RecommendItem = ({ sickName, boldString }: RecommendItemProps) => {

  return (
    <RecommendItemWrap>
      <ItemSpan>
        <ImageWrap src={searchIcon} />
        <InnerText>{sickName.split(boldString)[0]}</InnerText>
        <BoldText>{boldString}</BoldText>
        <InnerText>{sickName.split(boldString)[1]}</InnerText>
      </ItemSpan>
    </RecommendItemWrap>
  );
};

const ItemSpan = styled.span`
  display: flex;
  padding: 10px;
`;

const RecommendItemWrap = styled.div``;

const ImageWrap = styled.img`
  width: 20px;
  height: 20px;
`;

const InnerText = styled.h2`
`

const BoldText = styled.b`
  font-weight: bold;
`

export default RecommendItem;
