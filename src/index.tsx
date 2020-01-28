import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "./AppContainer";
import { createGlobalStyle } from "styled-components";

// For å enable hot reloading med Parcel

if (module.hot) {
  module.hot.accept();
}

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

`;

const App = (
  <BrowserRouter>
    <GlobalStyle />
    <AppContainer />
  </BrowserRouter>
);

ReactDOM.render(App, document.getElementById("root"));
