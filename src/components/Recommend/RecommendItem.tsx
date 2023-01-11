import React from 'react';
import styled from 'styled-components';
import { RecommendItemProps } from '../Models/RecommendItemTypes';
import searchIcon from '../../assets/search_white.png' 

const RecommendItem = ({ sickName }: RecommendItemProps) => {
  return (
    <RecommendItemWrap>
      <ItemSpan>
        <ImageWrap src={searchIcon}/>
        <h2>{sickName}</h2>
      </ItemSpan>
    </RecommendItemWrap>
  );
};

const ItemSpan = styled.span`
    display: flex;
    padding: 10px;
`;

const RecommendItemWrap = styled.div`
`;

const ImageWrap = styled.img`
    width: 20px;
    height: 20px;
`

export default RecommendItem;
