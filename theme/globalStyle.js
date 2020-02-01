import { createGlobalStyle } from 'styled-components'

import theme from 'theme'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  .copyright {
    color: ${theme.colors.button.primary};
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    .col-s-12 {width: 100%;}

    body::after {
      display: block;
      height: ${theme.footer.size * 4}vh;
    }
  }

  @media only screen and (min-width: 600px) {
    .col-md-1 {width: 8.33%;}
    .col-md-2 {width: 16.66%;}
    .col-md-3 {width: 25%;}
    .col-md-4 {width: 33.33%;}
    .col-md-5 {width: 41.66%;}
    .col-md-6 {width: 50%;}
    .col-md-7 {width: 58.33%;}
    .col-md-8 {width: 66.66%;}
    .col-md-9 {width: 75%;}
    .col-md-10 {width: 83.33%;}
    .col-md-11 {width: 91.66%;}
    .col-md-12 {width: 100%;}

    body {
      font-family: 'Adca';
      margin: 0;
      padding-top: ${(theme.header.size * 2)}vh;
    }
  
    body::after {
      display: block;
      height: ${theme.footer.size * 4}vh;
    }
  }

  @media only screen and (min-width: 992px) {
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}

    div.hamburger {
      display: none;
    }

    body {
      font-family: 'Cinzel';
      margin: 0;
      padding-top: ${(theme.header.size * 2)}vh;
    }
  
    body::after {
      display: block;
      height: ${theme.footer.size}vh;
    }
  }

  .pr {
    padding-right: 0.3em;
  }

  .container {
    margin: 3em 2em 2em;
  }

  .logo {
    padding: .5em 1em;
  }

  .social {
    color: #fff;
    padding: .5em;
    font-size: 2em;
  }

  .page-loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .warning {
    color: yellow;
  }

  .danger {
    color: red;
  }

  .footer-link {
    color: #fff;
    text-decoration: none;
  }

  .footer-list {
    list-style-type: none;
    text-align: left;
    padding-top: .2em;
  }

  .input {
    text-align: center;
  }

  @font-face {
    font-family: 'Adca';
    src: url('/fonts/Adca.ttf') format('ttf');
  }

  .center {
    text-align: center;
  }

  .checkbox {
    display: inline-block;
  }
`
