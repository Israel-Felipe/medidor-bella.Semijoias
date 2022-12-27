import styled from "styled-components";
import { Link } from "react-router-dom";

import gif from "../imgs/medir-com-barbante.gif";

import { Main, Container, Botoes, Voltar } from "./GlobalStyled.js";

export default function Calibragem() {
  return (
    <Main>
      <Container>
        <ImgGif>
          <img src={gif} alt="instrucao" />
        </ImgGif>

        <Instrucoes>
          <h2>Instrução:</h2>
          <h3> 1 - Enrole um fio em seu dedo.</h3>
          <h3> 2 - Marque o ponto onde se encontraram.</h3>
          <h3>3 - Com uma régua, meça a distância entre as marcações.</h3>
        </Instrucoes>

        <Botoes>
          <Link to={"/medicao-sem-anel"}>
            <button>Próximo passo</button>
          </Link>
          <Link to={"/"}>
            <Voltar>Voltar</Voltar>
          </Link>
        </Botoes>
      </Container>
    </Main>
  );
}

const ImgGif = styled.div`
  width: 80vw;
  height: auto;
  margin: 3% 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 10px;
    max-height: 100%;
    max-width: 100%;

    @media (min-width: 1300px) {
      width: 400px;
      margin: 5% 0 20% 12%;
      height: auto;
    }

    @media (min-width: 1300px) {
      width: 600px;
    }
  }
`;

const Instrucoes = styled.div`
  width: 80vw;
  text-align: left;
  color: #b17979;
  margin-bottom: 350px;

  @media (min-width: 1300px) {
    margin: 5% 5% 20% 5%;
  }
`;
