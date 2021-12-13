import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar-track {
    background: ${colors.dark};
  }

  * ::-webkit-scrollbar {
    width: 13px;
  }

  * ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: rgba(136, 136, 136, 0.513);
  }

  * ::-webkit-scrollbar-thumb:hover {
    background: rgba(85, 85, 85, 0.404);
  }

  html, body, #__next {
    height: 100%;
    background-color: ${colors.dark};
  }

  @media (max-width: 1920px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 1368px) {
    html {
      font-size: 89%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 70%;
    }
  }


  html,
  body {
    height: -webkit-fill-available;
    width: -webkit-fill-available;

    padding: 0;
    margin: 0;
    font-family: Raleway, Bebas Neue, Bitter, Lato, Roboto, -apple-system,
      BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans,
      Droid Sans, Helvetica Neue, sans-serif;

    @media (max-width: 720px) {
      font-size: 14px;
    }

    background: ${colors.dark};
  }

  a {
    color: inherit;
    text-decoration: none;
    box-sizing: border-box;
  }

  button,
  a {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`

export default GlobalStyles
