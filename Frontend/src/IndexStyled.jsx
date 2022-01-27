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

  html{
    height: 100%;
  }

  body {
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  }

  input,
  button,
  textarea,
  select,
  details {
    font-family: inherit;
  }

  #root{
    display: flex;
    height: 100%;
  }

  .app{
    display: flex;
    flex-direction: column;
    flex: 1;

    .main{
      flex: 1;
      display: flex;
    }
  }
`;

export default GlobalStyle;