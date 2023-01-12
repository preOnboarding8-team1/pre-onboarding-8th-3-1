// @TODO 검색 결과를 저장할 Context 만들기
import React, { useState, useMemo } from 'react';
import { RecommendItemType } from '../components/Models/RecommendItemTypes';

export interface DataContextValue {
  searchedKeyword: string;
  setSearchedKeyword: React.Dispatch<(prevState: string) => string>;
  recommendItemList: RecommendItemType[];
  setRecommendItemList: React.Dispatch<(prevState: RecommendItemType[]) => RecommendItemType[]>;
}

const DataContext = React.createContext<DataContextValue>(null!);

export const DataContextProvider = ({ children }) => {
  const [recommendItemList, setRecommendItemList] = useState<RecommendItemType[]>([]);
  const [searchedKeyword, setSearchedKeyword] = useState('');

  const memoContextValue = useMemo(
    () => ({ recommendItemList, setRecommendItemList, searchedKeyword, setSearchedKeyword }),
    [recommendItemList]
  );

  return <DataContext.Provider value={memoContextValue}>{children}</DataContext.Provider>;
};

export default DataContext;
