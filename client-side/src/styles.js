import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;
        background-color: #eeeeee;
        font-size: 16px;
        justify-content: center;
    }
`;