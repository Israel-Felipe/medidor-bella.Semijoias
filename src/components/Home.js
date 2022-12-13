import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.svg";

export default function Home() {
  return (
    <Main>
      <Container>
        <img src={logo} alt="LOVELU"></img>
        <Botoes>
          <Link to={"/instrucao-calibragem"}>
            <button>Medir com um anel</button>
          </Link>

          <Link to={"/instrucao-sem-anel"}>
            <Botao2>Medir com um barbante</Botao2>
          </Link>
        </Botoes>
      </Container>
      <Dev>
        <a href="https://linktr.ee/israel.felipe" target="blank">
          <h1>Desenvolvido por: Israel Felipe</h1>
        </a>
      </Dev>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  width: 80vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (min-width: 500px) {
    height: 70vh;
  }

  @media (min-width: 1300px) {
    flex-direction: inherit;
    height: 70vh;
  }

  img {
    width: 100vw;
    max-width: 600px;
    max-height: 40vh;

    @media (min-width: 1300px) {
      max-width: 800px;
    }
  }
`;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  @media (min-width: 1300px) {
    height: 100%;
    width: 100%;
  }

  button {
    width: 60vw;
    height: auto;
    padding: 20px;
    background-color: #b17979;
    color: #ffffff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    @media (min-width: 1300px) {
      margin: 0 5%;
      width: 90%;
      height: 20vh;
      font-size: 40px;
    }
  }
`;

const Botao2 = styled.button`
  color: #ffffff;
`;

const Dev = styled.h1`
  position: fixed;
  bottom: 2vh;
  color: red;

  h1 {
    color: #b17979;
    cursor: pointer;

    @media (min-width: 1300px) {
      font-size: 20px;
    }
  }
`;
