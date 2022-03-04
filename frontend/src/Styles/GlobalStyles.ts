import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  li {
    list-style: none;
  }

  a, button {
    text-decoration: none;

    :hover {
      cursor: pointer;
    }

  }

  body {
    color: #FFFFFF;
    background-color: #000000;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

`;
