import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [focus, setFocus] = useState<boolean>(false);

  const handleOnFocus = () => {
    const inputBox = document.querySelector<HTMLElement>('.inputBox');
    inputBox.style.outline = '#1976D2 solid 1px';
    setFocus(true);
  };

  const handleOutFocus = () => {
    const inputBox = document.querySelector<HTMLElement>('.inputBox');
    inputBox.style.outline = 'none';
    setFocus(false);
  };

  return (
    <MainContainer>
      <MainTitle>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </MainTitle>
      <InputContainer className="inputBox">
        <InputDisease
          type="search"
          placeholder="질환명을 입력해 주세요."
          onFocus={handleOnFocus}
          onBlur={handleOutFocus}
        />
        {focus && <InputClearButton>X</InputClearButton>}
        <InputSearchButton />
      </InputContainer>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 20px 0;
  background-color: #cae9fe;
`;

const MainTitle = styled.h1`
  text-align: center;
  color: black;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 480px;
  height: 70px;
  border-radius: 42px;
  background-color: white;
`;

const InputDisease = styled.input`
  width: 369px;
  height: 20px;
  margin: 20px 10px 20px 24px;
  padding-left: 24px;
  border: none;
  border-radius: 10px;
  font-size: 100%;
  caret-color: #1976d2;
  color: black;
  background: url('/asset/input_search.svg') no-repeat center;
  background-size: 20px 20px;
  background-position: 5px center;

  :focus {
    background-image: none;
    outline: none;
  }

  ::placeholder {
    font-size: 100%;
    padding-left: 15px;
  }

  ::-webkit-search-cancel-button {
    display: none;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

const InputClearButton = styled.button`
  width: 20px;
  height: 20px;
  margin-left: 2px;
  border: none;
  border-radius: 50%;
  background-color: #b1b6b9;
  color: white;
`;

const InputSearchButton = styled.button`
  width: 48px;
  height: 48px;
  margin: 0 5px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: url('/asset/button_search.svg') no-repeat center;
  background-size: 20px 20px;
  background-color: #017bea;
  cursor: pointer;
`;
