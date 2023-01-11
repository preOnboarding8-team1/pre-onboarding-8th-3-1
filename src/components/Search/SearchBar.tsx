import React from 'react';
import styled from 'styled-components';
import Card from '../../UI/Card';
import searchIcon from '../../assets/search_blue.png';

const SearchBar = () => {
  return (
    <SearchBarWrap>
      <Card>
        <SearchBarInput type="search" />
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
  border: none ;
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
  top:10px;
  left: 20px;
  position: relative;
  border-radius: 20px;
  grid-column: 1 
`;

export default SearchBar;
