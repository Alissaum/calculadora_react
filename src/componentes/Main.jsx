import React from "react";
import styled from "styled-components";
import Calculadora from "./Calculadora";

const MainStyled = styled.main`
  width: 100vw;
  height: 86vh;
  background-color: #ff0000ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ffd700;
  padding: 10px 20px;
  @media screen and (max-width: 480px) {
    height: 100vh;
    padding: 0;
  }
`;

export default function Main() {
  return (
    <MainStyled>
      <Calculadora />
    </MainStyled>
  );
}
