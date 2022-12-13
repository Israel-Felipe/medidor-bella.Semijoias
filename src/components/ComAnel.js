import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.svg";

import { Main, Botoes, Voltar } from "./GlobalStyled.js";

export default function Home() {
  const { umCm } = useContext(UserContext);

  const [tamAnel, setTamAnel] = useState(150);

  const tamAnelCm = tamAnel / umCm;

  const [aro, setAro] = useState(10);

  useEffect(() => {
    if (tamAnelCm < 1.45) {
      setAro("Seu aro é: ##");
    } else if (tamAnelCm <= 1.48) {
      setAro("Seu aro é: 10");
    } else if (tamAnelCm <= 1.52) {
      setAro("Seu aro é: 11");
    } else if (tamAnelCm <= 1.55) {
      setAro("Seu aro é: 12");
    } else if (tamAnelCm <= 1.58) {
      setAro("Seu aro é: 13");
    } else if (tamAnelCm <= 1.62) {
      setAro("Seu aro é: 14");
    } else if (tamAnelCm <= 1.65) {
      setAro("Seu aro é: 15");
    } else if (tamAnelCm <= 1.68) {
      setAro("Seu aro é: 16");
    } else if (tamAnelCm <= 1.72) {
      setAro("Seu aro é: 17");
    } else if (tamAnelCm <= 1.75) {
      setAro("Seu aro é: 18");
    } else if (tamAnelCm <= 1.78) {
      setAro("Seu aro é: 19");
    } else if (tamAnelCm <= 1.82) {
      setAro("Seu aro é: 20");
    } else if (tamAnelCm <= 1.85) {
      setAro("Seu aro é: 21");
    } else if (tamAnelCm <= 1.88) {
      setAro("Seu aro é: 22");
    } else if (tamAnelCm <= 1.92) {
      setAro("Seu aro é: 23");
    } else if (tamAnelCm <= 1.95) {
      setAro("Seu aro é: 24");
    } else if (tamAnelCm <= 1.99) {
      setAro("Seu aro é: 25");
    } else if (tamAnelCm <= 2.02) {
      setAro("Seu aro é: 26");
    } else if (tamAnelCm <= 2.05) {
      setAro("Seu aro é: 27");
    } else if (tamAnelCm <= 2.08) {
      setAro("Seu aro é: 28");
    } else if (tamAnelCm <= 2.12) {
      setAro("Seu aro é: 29");
    } else if (tamAnelCm <= 2.15) {
      setAro("Seu aro é: 30");
    } else if (tamAnelCm <= 2.18) {
      setAro("Seu aro é: 31");
    } else if (tamAnelCm <= 1.22) {
      setAro("Seu aro é: 32");
    } else if (tamAnelCm <= 2.25) {
      setAro("Seu aro é: 33");
    } else if (tamAnelCm <= 2.28) {
      setAro("Seu aro é: 34");
    } else if (tamAnelCm <= 2.32) {
      setAro("Seu aro é: 35");
    } else {
      setAro("Seu aro é: ##");
    }
  }, [tamAnelCm]);

  return (
    <Main>
      <Container>
        <Instrucoes>
          <h2>Instrução:</h2>
          <h3>
            Coloque o seu anel em cima da figura e ajuste até que fiquem do
            mesmo tamanho.
          </h3>
          <h4>
            Caso o seu anel for anatômico, considere um número a menos do aro.
          </h4>
        </Instrucoes>

        <Cont2>
          <BoxTamanho>
            <CirculoMaior>
              <Circulo tamAnel={`${tamAnel}px`}>
                <img src={logo} alt="anel"></img>
              </Circulo>
            </CirculoMaior>
          </BoxTamanho>

          <h6>{aro}</h6>
        </Cont2>
        <Botoes>
          <input
            type="range"
            name="tamanho"
            min="50"
            max="200"
            step="0.5"
            value={tamAnel}
            onChange={(e) => setTamAnel(e.target.value)}
          />
          <a
            href="https://bellasemijoiasam.lojavirtualnuvem.com.br/aneis/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visitar a loja online da BellaSemijoias</button>
          </a>
          <Link to={"/calibragem"}>
            <Voltar>Voltar</Voltar>
          </Link>
        </Botoes>
      </Container>
    </Main>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 750px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
  color: #b17979;

  @media (min-width: 1300px) {
    flex-direction: initial;
    justify-content: center;
    align-items: flex-start;
    height: 90vh;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2,
  h6 {
    font-weight: bold;
    line-height: 40px;
    font-size: 20px;

    @media (min-width: 1300px) {
      font-size: 70px;
      line-height: 150px;
    }
  }

  h6 {
    @media (min-width: 1300px) {
      font-size: 40px;
      line-height: 150px;
    }
  }

  h3,
  h4 {
    line-height: 22px;
    font-size: 16px;

    @media (min-width: 1300px) {
      font-size: 30px;
      line-height: 60px;
    }
  }

  h4 {
    margin-top: 10px;
    font-style: italic;
  }

  input {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 5px;
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
`;

const Instrucoes = styled.div`
  width: 80vw;
  text-align: left;
  margin: 3vh 0;

  @media (min-width: 1300px) {
    margin: 3%;
  }
`;

const BoxTamanho = styled.div`
  width: 80vw;
  height: 30vh;
  align-items: left;
  margin-top: 3vh;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  position: relative;

  @media (min-width: 1300px) {
    margin-top: 20vh;
    width: 35vw;
    margin-right: 5vw;
  }
`;

const CirculoMaior = styled.div`
  width: ${(props) => props.tamAnel};
  height: ${(props) => props.tamAnel};
  padding: 5px;
  background-color: #b17979;
  border-radius: 100px;
  position: absolute;
  bottom: 0px;
`;

const Circulo = styled.div`
  width: ${(props) => props.tamAnel};
  height: ${(props) => props.tamAnel};
  border-radius: 100px;
  background-color: #ffffff;
  background-image: ${logo};
`;

const Cont2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
