import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const Wrapper = styled.div`
  width: 100%;
  background-color: lightblue;
  padding: 80px 0 160px;
`;

const Main = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

export default Main;
