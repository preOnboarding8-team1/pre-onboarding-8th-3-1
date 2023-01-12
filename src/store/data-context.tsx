// @TODO 검색 결과를 저장할 Context 만들기
import React, { useState, useMemo } from 'react';
import { RecommendItemType } from '../components/Models/RecommendItemTypes';

export interface DataContextValue {
  recommendItemList: RecommendItemType[];
  setRecommendItemList: React.Dispatch<(prevState: RecommendItemType[]) => RecommendItemType[]>;
}

const DataContext = React.createContext<DataContextValue>(null!);

export const DataContextProvider = ({ children }) => {
  const [recommendItemList, setRecommendItemList] = useState<RecommendItemType[]>([]);

  const memoContextValue = useMemo(() => ({ recommendItemList, setRecommendItemList }), [recommendItemList]);

  return <DataContext.Provider value={memoContextValue}>{children}</DataContext.Provider>;
};

export default DataContext;
