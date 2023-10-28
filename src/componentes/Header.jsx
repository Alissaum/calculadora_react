import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100vw;
  height: 14vh;
  background: linear-gradient(to right, #69c0ea, #69c0ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Titulo = styled.h1`
  text-align: center;
  color: #ff0000ff;
  font-size: 4rem;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Titulo>Calculadora</Titulo>
    </HeaderStyled>
  );
}
