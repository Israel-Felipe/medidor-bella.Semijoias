/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import arraste from "../imgs/arraste.png";

import { Main, Container, Voltar } from "./GlobalStyled.js";

export default function Calibragem() {
  const { tamCartao, setTamCartao } = useContext(UserContext);
  return (
    <Main>
      <Container>
        <Cartao largura={`${tamCartao}px`}></Cartao>

        <Botoes>
          <img src={arraste} />
          <input
            type="range"
            name="tamanho"
            min="100"
            max="350"
            step="1"
            value={tamCartao}
            onChange={(e) => setTamCartao(e.target.value)}
          />
          <Link to={"/medicao-com-anel"}>
            <button>Pronto, já calibrei!</button>
          </Link>
          <Link to={"/instrucao-calibragem"}>
            <Voltar>Voltar</Voltar>
          </Link>
        </Botoes>
      </Container>
    </Main>
  );
}

const Cartao = styled.div`
  width: 90vw;
  height: ${(props) => props.largura};
  border-top: 5px solid #b17979;
  border-bottom: 5px solid #b17979;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 100px;
`;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;

  input {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 20px;
    background: rgba(238, 202, 196);
    outline: none;
    width: 60vw;
    height: 10px;
    margin: 10px 20px;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #b17979;
    cursor: pointer;
  }

  input::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #b17979;
    cursor: pointer;
  }

  button {
    width: 80vw;
    height: auto;
    margin: 20px;
    padding: 20px;
    background-color: #b17979;
    color: #ffffff;
    border-radius: 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    cursor: pointer;
  }

  img {
    width: 150px;
    margin-left: -50vw;
    margin-bottom: -40px;
  }
`;
