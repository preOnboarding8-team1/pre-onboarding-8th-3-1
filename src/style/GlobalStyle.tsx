import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --baby-blue: #e0f2ff;
  --light-blue: #CAE9FF;
  --main-blue: #007BE9;
  --light-gray: #A7AFB7;
  --middle-gray: #7e7e7e;
  --font-gray: #272727;
}
* {
  box-sizing: border-box;
  color: var(--font-color);
  margin: 0;
  padding: 0;
  font-size: 16px;
}
body {
  width: 100vw;
  height: 100vh;
  background-color: var(--light-blue);
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyle;
