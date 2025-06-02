// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Roboto, sans-serif;
    background-color: ${({ theme }) =>
        theme === 'light' ? '#f3e8ff' : '#1a1a1a'};
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
