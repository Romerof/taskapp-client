import { createGlobalStyle } from 'styled-components';
 

const BaseStyle = createGlobalStyle`

    html{
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'segoe ui', 'roboto', sans-serif;
        min-height: 100vh;
        margin: 0;
        padding: 0;

        background-color: #e1e1e1;
        color: ${({ theme })=> theme.dark };

    }

    h1 {
        font-size: 2.5em;
        font-weight: bolder;
        color: currentColor;
    }

    h1, h2, h3, h4 {
        text-align: center;
        margin: 0;
    }

    span {
        font-weight: lighter;
    }

    .shadow{
        box-shadow: 0 2px 5px #00000025; 
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

`;

export default BaseStyle