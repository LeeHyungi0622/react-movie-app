import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle `
    ${reset};

    * {
        box-sizing: border-box;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top: 50px;
    }
`;

export default GlobalStyles;