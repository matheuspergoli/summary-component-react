import { ThemeProvider, createGlobalStyle } from "styled-components"
import bgImage from "../images/pattern-background-desktop.svg"

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    padding: 20px;
    background-repeat: repeat-x;
    background-image: url(${bgImage});
    background-color: hsl(225, 100%, 94%);
  }
`

export type Theme = {
  theme: {
    colors: {
      paleBlue: string,
      brightBlue: string,
      veryPaleBlue: string,
      desaturatedBlue: string,
      darkBlue: string
    }
  }
}

const theme = {
  colors: {
    paleBlue: 'hsl(225, 100%, 94%)',
    brightBlue: 'hsl(245, 75%, 52%)',
    veryPaleBlue: 'hsl(225, 100%, 98%)',
    desaturatedBlue: 'hsl(224, 23%, 55%)',
    darkBlue: 'hsl(223, 47%, 23%)'
  }
}

export function GlobalThemeProvider({ children }: any) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}