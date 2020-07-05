import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root {
        --coin: #ddc84d;
        --rank: #EF4649;
        --button: #999999;
        --hoverbutton: #EF4649;
        /*--lowchallenge: #3FB554;*/
        --lowchallenge: #F79236;
        --challengeicon: #0090CD;
    }

    * {
        overflow-x: hidden;
    }

    body {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text};
        font-family: 'Ubuntu', sans-serif;
        transition: all 0.2s;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`;
