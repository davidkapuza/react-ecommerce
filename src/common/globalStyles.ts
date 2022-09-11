import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
  ul {
    list-style-type: none;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.Black};
  }
  img {
    max-inline-size: 100%;
    block-size: auto;
    object-position: center;
  }
  select, input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export default GlobalStyles;
