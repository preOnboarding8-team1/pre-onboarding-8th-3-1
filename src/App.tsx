import styled from 'styled-components';
import React, { useState } from 'react';
import Search from './Search';

const App = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [disease, setDisease] = useState('');

  const handleOnFocus = (): void => {
    const inputBox = document.querySelector<HTMLElement>('.inputBox');
    const buttonClear = document.querySelector<HTMLElement>('.buttonClear');

    inputBox.style.outline = '#1976D2 solid 1px';
    buttonClear.style.display = 'block';
    setFocus(true);
  };

  const handleOutFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    const inputBox = document.querySelector<HTMLElement>('.inputBox');
    const buttonClear = document.querySelector<HTMLElement>('.buttonClear');

    if (!event.relatedTarget) buttonClear.style.display = 'none';
    inputBox.style.outline = 'none';
    setFocus(false);
  };

  const handleInputText = (): void => {
    const inputDisease = document.querySelector<HTMLInputElement>('.inputDisease');

    inputDisease.value = '';
    inputDisease.focus();
  };

  return (
    <>
      <MainContainer>
        <MainTitle>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </MainTitle>
        <InputContainer className="inputBox">
          <InputDisease
            className="inputDisease"
            type="search"
            placeholder="질환명을 입력해 주세요."
            onFocus={handleOnFocus}
            onBlur={handleOutFocus}
          />
          <InputClearButton className="buttonClear" onClick={handleInputText}>
            X
          </InputClearButton>
          <InputSearchButton />
        </InputContainer>
      </MainContainer>
      {focus && <Search setDisease={setDisease} disease={disease} />}
    </>
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
  justify-content: space-between;
  align-items: center;
  width: 480px;
  height: 70px;
  border-radius: 42px;
  background-color: white;
`;

const InputDisease = styled.input`
  width: 370px;
  height: 25px;
  padding-left: 20px;
  border: none;
  border-radius: 10px;
  font-size: 100%;
  font-weight: 500;
  caret-color: #1976d2;

  :focus {
    background-image: none;
    outline: none;
  }

  :focus::-webkit-input-placeholder,
  :focus::-webkit-input-placeholder {
    color: transparent;
    background-image: none;
  }

  ::placeholder {
    padding-left: 25px;
    background: url('/asset/input_search.svg') no-repeat center;
    background-size: 20px 20px;
    background-position: 0px bottom;
    font-size: 100%;
    font-weight: 500;
    color: grey;
  }

  ::-webkit-search-cancel-button {
    display: none;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

const InputClearButton = styled.button`
  display: none;
  width: 20px;
  height: 20px;
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
