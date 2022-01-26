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
    --grey-9: #f3f3f3;
    --yellow-1: #FAE800;
  }

  body {
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
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