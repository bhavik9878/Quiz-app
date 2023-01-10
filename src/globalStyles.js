import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    margin: 0;
    padding: 0;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
`;

export const lightTheme = {
  body: "#ffffff",
  text: "#121620",
  border:"#00000020"
};
export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  border:"#f1f1f1"
};

export default GlobalStyle;
