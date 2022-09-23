import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    background: #f8f5f2;
    font-family: 'Imbue', serif;
  }
  input {
    border: unset;
  }
  input:focus {
    outline: none;
  }
`;
 
export default GlobalStyle;