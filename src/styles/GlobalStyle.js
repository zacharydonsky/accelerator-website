import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    margin: 0;
    padding: 0;
    background-color: #fafaf3;
  }
`

export default GlobalStyle
