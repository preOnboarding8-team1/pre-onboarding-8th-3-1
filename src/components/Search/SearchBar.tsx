import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from '../../UI/Card';
import searchIcon from '../../assets/search_blue.png';
import FocusContext from '../../store/focus-context';

const SearchBar = () => {
  // @TODO onFocus, onBlur 처리할 Context 만들기
  // focus, blur에 따라 context를 만들어 RecommendItemBox를 보일지 말지 결정한다.

  const ctx = useContext(FocusContext);
  return (
    <SearchBarWrap>
      <Card>
        <SearchBarInput type="search" placeholder="질환명을 검색해주세요" onFocus={ctx.onFocus} onBlur={ctx.onBlur} />
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
