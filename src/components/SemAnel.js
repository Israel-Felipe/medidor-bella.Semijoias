import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Main, Voltar } from "./GlobalStyled.js";

export default function Home() {
  const [tamAnel, setTamAnel] = useState(5);

  const [aro, setAro] = useState(10);

  useEffect(() => {
    if (tamAnel < 5.1) {
      setAro("Seu aro é: 10");
    } else if (tamAnel < 5.2) {
      setAro("Seu aro é: 11");
    } else if (tamAnel < 5.3) {
      setAro("Seu aro é: 12");
    } else if (tamAnel < 5.4) {
      setAro("Seu aro é: 13");
    } else if (tamAnel < 5.5) {
      setAro("Seu aro é: 14");
    } else if (tamAnel < 5.6) {
      setAro("Seu aro é: 15");
    } else if (tamAnel < 5.7) {
      setAro("Seu aro é: 16");
    } else if (tamAnel < 5.8) {
      setAro("Seu aro é: 17");
    } else if (tamAnel < 5.9) {
      setAro("Seu aro é: 18");
    } else if (tamAnel < 6.0) {
      setAro("Seu aro é: 19");
    } else if (tamAnel < 6.1) {
      setAro("Seu aro é: 20");
    } else if (tamAnel < 6.2) {
      setAro("Seu aro é: 21");
    } else if (tamAnel < 6.3) {
      setAro("Seu aro é: 22");
    } else if (tamAnel < 6.4) {
      setAro("Seu aro é: 23");
    } else if (tamAnel < 6.5) {
      setAro("Seu aro é: 24");
    } else if (tamAnel < 6.6) {
      setAro("Seu aro é: 25");
    } else if (tamAnel < 6.7) {
      setAro("Seu aro é: 26");
    } else if (tamAnel < 6.8) {
      setAro("Seu aro é: 27");
    } else if (tamAnel < 6.9) {
      setAro("Seu aro é: 28");
    } else if (tamAnel < 7.0) {
      setAro("Seu aro é: 29");
    } else if (tamAnel < 7.1) {
      setAro("Seu aro é: 30");
    } else if (tamAnel < 7.2) {
      setAro("Seu aro é: 31");
    } else if (tamAnel < 7.3) {
      setAro("Seu aro é: 32");
    } else if (tamAnel < 7.4) {
      setAro("Seu aro é: 33");
    } else if (tamAnel < 7.5) {
      setAro("Seu aro é: 34");
    } else {
      setAro("Seu aro é: 35");
    }
  }, [tamAnel]);

  return (
    <Main>
      <Container>
        <Instrucoes>
          <h2>Agora é fácil...</h2>
          <h3>
            Você só precisa arrastar a bolinha cinza até que indique a distância
            que você acabou de medir no passo anterior.
          </h3>
        </Instrucoes>

        <h2>{tamAnel} cm</h2>
        <input
          type="range"
          name="tamanho"
          min="5"
          max="7.5"
          step="0.1"
          value={tamAnel}
          onChange={(e) => setTamAnel(e.target.value)}
        />
        <h1>{aro}</h1>

        <Footer>
          <h3>
            Você já sabe o aro ideal para o seu dedo. Agora venha escolher o
            anel ideal para deixar sua mão ainda mais linda.
          </h3>
          <h2>Você merece!</h2>

          <a
            href="https://bellasemijoiasam.lojavirtualnuvem.com.br/aneis/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visitar a loja online da BellaSemijoias</button>
          </a>
          <Link to={"/instrucao-sem-anel"}>
            <Voltar>Voltar</Voltar>
          </Link>
        </Footer>
      </Container>
    </Main>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 700px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;

  @media (min-width: 1300px) {
    height: 90vh;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    height: 100px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    color: #b17979;

    @media (min-width: 1300px) {
      font-size: 40px;
      line-height: 80px;
    }
  }

  h2 {
    font-weight: bold;
    line-height: 40px;
    font-size: 20px;
    color: #b17979;

    @media (min-width: 1300px) {
      font-size: 40px;
      line-height: 80px;
    }
  }

  h3 {
    line-height: 22px;
    font-size: 16px;
    margin-bottom: 2vh;
    color: #b17979;

    @media (min-width: 1300px) {
      font-size: 25px;
      line-height: 50px;
    }
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

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  padding: 0 3%;
  text-align: center;
  position: absolute;
  bottom: 10px;

  @media (min-width: 1300px) {
    padding: 0 10%;
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
`;

const Instrucoes = styled.div`
  width: 80vw;
  text-align: left;
  color: #b17979;
  margin: 3vh 0;
`;
