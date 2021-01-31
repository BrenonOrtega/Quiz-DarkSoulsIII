import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;

    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Garamond', serif;

    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;

    background-image{
      flex:1  
      }
  }
  button {
    opacity: 85%;
    padding: 7px 10px;
    margin: 5 auto 15px auto;
    border: 1px solid;
    border-radius: ${({ theme }) => theme.borderRadius};
    text-align: center;
    transition: 0.3s;
    max-width: 300px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    font: 16px Garamond, serif;
    :hover{
      background: #AAAAAA;
    }
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
