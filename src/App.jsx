import React, { useState } from "react";
import Header from "./componentes/Header";
import Main from "./componentes/Main";
import { GlobalStyle } from "./assets/css/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}
