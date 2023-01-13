import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
  width: 490px;
  border: 2px soliud;
  border-color: #fff;
  position: relative;
  border-radius: 42px;
  background-color: #fff;
`;

export const SearchBoxContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBoxInputWrapper = styled.div`
  width: calc(100% - 100px);
  padding: 20px 10px 20px 24px;
`;

export const SearchBoxInput = styled.input`
  width: 100%;
  padding-right: 25px;
  border: none;

  &: focus {
    outline: none;
  }
`;

export const SearchBoxButton = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 100%;
  background-color: #007be9;
  margin-right: 10px;
`;

export const RelatedSearchWrapper = styled.div`
  width: 100%;
  height: 235px;
  position: absolute;
  left: 0;
  top: 75px;
  background-color: #fff;
  border: 0;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  overflow: auto;
`;

export const RelatedSearchKeyword = styled.p`
  padding: 8px 24px;
  font-size: 16px;
  font-weight: bold;
`;

export const RelatedSearchContentHeading = styled.h2`
  color: #6a737b;
  padding: 0 24px;
  font-size: 13px;
`;
