import { createGlobalStyle } from 'styled-components';
// #FAE800
//#1D1D1D
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  :root{
    --grey-1: #1D1D1D;
    --yellow-1: #FAE800;
  }

  body {
  margin: 0%;
  width: 100vh;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  }

  input,
  button,
  textarea,
  select,
  details {
    font-family: inherit;
  }
`;

export default GlobalStyle;