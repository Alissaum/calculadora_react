import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 30rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: #000;
  color: #ffd700;
  padding: 4rem 2rem;
  border-radius: 2rem;
  gap: 20px;
  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

const Input = styled.input`
  border-radius: 1rem;
  width: 88%;
  border: 1px solid #121212;
  font-size: 1.4rem;
  background-color: #ffd700;
  padding: 0.4rem 0.8rem;
  font-weight: 600;
  outline-color: #ffd700;
`;

const ButtonsSection = styled.section`
  display: flex;
  width: 70%;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

const Button = styled.button`
  border-radius: 1rem;
  width: 4rem;
  height: 4rem;
  padding: 2rem;
  margin: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ffd700;
  background-color: transparent;
  border: 2px solid #ffd700;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    scale: 1.1;
  }
`;
const Result = styled.div`
  font-size: 1.8rem;
  background-color: #ffd700;
  color: #121212;
  width: 88%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-weight: 900;
`;

export default function Calculadora() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const pegarPrimeiroValor = (evento) => {
    setPrimeiroValor(Number(evento.target.value));
  };
  const pegarSegundoValor = (evento) => {
    setSegundoValor(Number(evento.target.value));
  };
  const adicao = () => {
    setResultado(primeiroValor + segundoValor);
  };
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };
  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };
  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };
  const limpar = () => {
    setResultado("");
  };

  return (
    <Container>
      <Input
        onChange={pegarPrimeiroValor}
        type="number"
        placeholder="Insira o valor"
      />
      <Input
        onChange={pegarSegundoValor}
        type="number"
        placeholder="Insira o valor"
      />
      <ButtonsSection>
        <Button onClick={adicao}>+</Button>
        <Button onClick={subtracao}>-</Button>
        <Button onClick={multiplicacao}>X</Button>
        <Button onClick={divisao}>/</Button>
        <Button onClick={limpar}>AC</Button>
      </ButtonsSection>
      <h3>Resultado: </h3>
      <Result>{resultado}</Result>
    </Container>
  );
}
