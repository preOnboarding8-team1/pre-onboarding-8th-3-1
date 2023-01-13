import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';

const App = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [diseases, setDiseases] = useState<object>(null);
  let selectedIndex = null;

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
    setDiseases(null);
    inputDisease.focus();
  };

  function debounce(changeText, delay = 500) {
    let timer = null;

    return function (...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => changeText.apply(this, args), delay);
    };
  }
  const handleChangeText = (event: Event): void => {
    const inputText = event.target as HTMLInputElement;
    if (inputText.value === '') setDiseases(null);

    try {
      if (inputText.value) {
        axios.get(`http://localhost:4000/sick?q=${inputText.value}`).then((res) => {
          console.info('calling api');
          if (res.data.length === 0) {
            setDiseases(null);
            return;
          }
          setDiseases(res.data);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyArrow = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown': {
        const diseaseName = document.querySelectorAll<HTMLElement>('.diseaseName');
        if (selectedIndex === null) selectedIndex = 0;
        else ++selectedIndex;
        if (diseaseName.length === selectedIndex) selectedIndex = 0;
        diseaseName.forEach((unselected) => {
          unselected.style.backgroundColor = 'white';
        });
        diseaseName[selectedIndex].style.backgroundColor = '#ecf0f2';

        break;
      }

      case 'ArrowUp': {
        const diseaseName = document.querySelectorAll<HTMLElement>('.diseaseName');
        --selectedIndex;
        if (selectedIndex < 0) {
          selectedIndex = diseaseName.length - 1;
        }
        diseaseName.forEach((unselected: HTMLElement) => {
          unselected.style.backgroundColor = 'white';
        });
        diseaseName[selectedIndex].style.backgroundColor = '#ecf0f2';
        break;
      }
      default:
    }
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
            onChange={debounce(handleChangeText)}
            onKeyDown={handleKeyArrow}
          />
          <InputClearButton className="buttonClear" onClick={handleInputText}>
            X
          </InputClearButton>
          <InputSearchButton />
        </InputContainer>
      </MainContainer>
      {focus && <Search diseases={diseases} />}
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
