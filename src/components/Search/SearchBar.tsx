import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../UI/Card';
import searchIcon from '../../assets/search_blue.png';
import FocusContext from '../../store/focus-context';
import FetchInputHandler from '../../api/FetchInputHandler';
import DataContext from '../../store/data-context';

const SearchBar = () => {
  const focusCtx = useContext(FocusContext);
  const dataCtx = useContext(DataContext);
  const [input, setInput] = useState('');

  useEffect(() => {
    const debouncer = setTimeout(() => {
      if (input) {
        FetchInputHandler(input).then((res) => {
          dataCtx.setRecommendItemList(res);
        });
      }
    }, 500);
    return () => {
      clearTimeout(debouncer);
    };
  }, [input]);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <SearchBarWrap>
      <Card>
        <SearchBarInput
          type="search"
          placeholder="질환명을 검색해주세요"
          onFocus={focusCtx.onFocus}
          onBlur={focusCtx.onBlur}
          onChange={onChangeHandler}
          value={input}
        />
        <ImageWrap src={searchIcon} alt="검색" />
      </Card>
    </SearchBarWrap>
  );
};

const SearchBarInput = styled.input`
  height: 50px;
  width: 420px;
  bottom: 10px;
  left: 10px;
  position: relative;
  border: none;
  :focus {
    outline: none;
  }
`;

const SearchBarWrap = styled.div`
  width: 500px;
  height: 50px;
  top: 100px;
  position: relative;
  margin: auto;
`;

const ImageWrap = styled.img`
  width: 50px;
  height: 50px;
  top: 10px;
  left: 20px;
  position: relative;
  border-radius: 20px;
  grid-column: 1;
`;

export default SearchBar;
