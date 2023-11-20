import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  *,*::before,*::after{
    box-sizing: inherit;
  }

  :root{
    color-scheme: dark light;
  }

  body{
    font-family:"Lato";
    padding:1rem;
    
  }
`;
