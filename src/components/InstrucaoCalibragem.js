import styled from "styled-components";
import { Link } from "react-router-dom";
import calibragem from "../imgs/calibragem.png";
import { Main, Container, Botoes, Voltar } from "./GlobalStyled.js";

export default function InstrucaoCalibragem() {
  return (
    <Main>
      <Container>
        <Instrucoes>
          <h2>IMPORTANTE: </h2>
          <h3>
            Para que possamos ter maior precisão na medição do aro, primeiro
            precisamos calibrar o medidor. Para isso, você deve colocar um
            cartão bancário sobre a tela e arrastar a bolinha cinza até que a
            figura fique da mesma altura que o cartão (como mostra a imagem):
          </h3>
        </Instrucoes>

        <img src={calibragem} alt="calibragem" />

        <Botoes>
          <Link to={"/calibragem"}>
            <button>Entendi, vamos calibrar!</button>
          </Link>
          <Link to={"/"}>
            <Voltar>Voltar</Voltar>
          </Link>
        </Botoes>
      </Container>
    </Main>
  );
}

const Instrucoes = styled.div`
  width: 80vw;
  text-align: left;
  color: #b17979;
  margin: 3% 0;

  @media (min-width: 1300px) {
    margin: 5% 5% 20% 5%;
  }
`;
