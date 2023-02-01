import styled, { createGlobalStyle } from 'styled-components';

import BGImage from "./images/background.png"

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'JetBrains Mono', sans-serif;
    }

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-weight: 600;

    > p{
        color: #ffff;
    }

    .block{
        width: fit-content;
        height: fit-content;
    }

    .score{
        font-size: 2rem;
        font-weight: 700;
        margin: 0 0 20px 0;
        text-align: center;
    }

    h1{
        font-family: 'Jockey One', sans-serif;
        background-image: linear-gradient(180deg, #fff, #05AA90);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-size: 70px;
        text-align: center;
        margin: 0 0 20px 0;
    }

    .start, .next{
      cursor: pointer;
      background: linear-gradient(180deg, #fff, #ffcc911);
      border: 2px solid #05AA90;
      box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
      border-radius: 10px;
      height: 40px;
      margin: 20px 0;
      padding:0 40px;
      font-weight: 700;
    }

    .start{
        max-width: 200px;
    }
`