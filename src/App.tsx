import styled from 'styled-components';
import RecommendItemBox from './components/Recommend/RecommendItemBox';
import SearchBar from './components/Search/SearchBar';

const App = () => {
  return (
    <AppWrapper>
      <SearchBar />
      <RecommendItemBox />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  background: #ace5fb;
  height: 1000px;
`;

export default App;
