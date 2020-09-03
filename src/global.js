import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

html{
    margin: 0;
    padding: 0;
    height: 100%;
}

*, *::after, *::before {
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
    height: 100%;
    margin: 0;
}

#root {
height: 100%;
}

h1 {
    font-size: 2rem;
    text-align: center;
}

img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
}

div {
    text-align: center;
}

a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
}
`