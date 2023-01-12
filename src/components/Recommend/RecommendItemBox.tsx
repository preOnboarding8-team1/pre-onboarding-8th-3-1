import React, { useContext } from 'react';
import styled from 'styled-components'
import Card from '../../UI/Card';
import {RecommendItemType} from '../Models/RecommendItemTypes';
import RecommendItem from './RecommendItem';
import DataContext from '../../store/data-context';

const RecommendItemBox = () => {
    const dataCtx = useContext(DataContext)

    const RecommendItemList = dataCtx.recommendItemList.map((item:RecommendItemType)=>(
        <RecommendItem sickName={item.sickNm}/>
    ))

    return (
    <RecommendItemBoxWrapper>
        <Card>
                <RecommendItemBoxText>
                    추천 검색어
                </RecommendItemBoxText>
                {RecommendItemList}
        </Card>
    </RecommendItemBoxWrapper>
    );
};

const RecommendItemBoxWrapper = styled.div`
    position: relative;
    top :130px;
    width: 500px;
    height: 500px;
    margin: auto;
`

const RecommendItemBoxText = styled.h5`
    padding: 10px;
    font-size: 13px;
    color: gray;
`

export default RecommendItemBox;