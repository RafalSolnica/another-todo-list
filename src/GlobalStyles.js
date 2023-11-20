import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  *,*::before,*::after{
    box-sizing: inherit;
  }

  :root{
    --clr-font:#ccc;
    --clr-bg:#222;
  }

  body{
    font-family:"Lato";
    padding:1rem;
    color:var(--clr-font);
    background:var(--clr-bg);
  }
`;
