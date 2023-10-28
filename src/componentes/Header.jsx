import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100vw;
  height: 14vh;
  background-color: #000;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #ffd700;
  padding: 10px 20px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default function Header() {
  return <HeaderStyled></HeaderStyled>;
}
