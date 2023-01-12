import styled from 'styled-components';
import Recommend from './Recommend';

type DiseaseType = {
  sickCd: string;
  sickNm: string;
};

const Search = ({ diseases }) => {
  const handleTextBold = (name: string): JSX.Element => {
    const inputDisease = document.querySelector<HTMLInputElement>('.inputDisease').value;
    return (
      <>
        {name.split(inputDisease)[0]}
        <span style={{ fontWeight: '800' }}>{inputDisease}</span>
        {name.split(inputDisease)[1]}
      </>
    );
  };

  return (
    <SearchContainer>
      <SearchTitle>추천 검색어</SearchTitle>
      <SearchResult>
        {diseases ? (
          diseases.map((disease: DiseaseType) => (
            <Disease className="diseaseName" key={disease.sickCd}>
              {handleTextBold(disease.sickNm)}
            </Disease>
          ))
        ) : (
          <Recommend />
        )}
      </SearchResult>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.section`
  width: 450px;
  margin: auto;
  padding: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 0px #000000;
`;

const SearchTitle = styled.p`
  margin-left: 20px;
  font-size: 12px;
  color: grey;
`;

const SearchResult = styled.ul`
  box-sizing: border-box;
  padding: 0;
  list-style: none;
`;

const Disease = styled.li`
  box-sizing: border-box;
  padding: 10px 50px;
  background: url('/asset/input_search.svg') no-repeat center;
  background-size: 20px 20px;
  background-position: 20px center;
  word-break: keep-all;
  font-size: 100%;
  font-weight: 500;
`;

const SearchNone = styled.p`
  padding-left: 20px;
`;
