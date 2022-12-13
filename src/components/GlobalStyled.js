import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 35px 0;

  @media (min-width: 1300px) {
    height: 100vh;
  }
`;

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
    flex-direction: initial;
    justify-content: center;
    height: 90vh;
  }

  img {
    width: 80vw;
    border-radius: 10px;

    @media (min-width: 500px) {
      max-width: 350px;
      height: auto;
    }

    @media (min-width: 1300px) {
      margin: -100px 100px 50px 0;
    }

    @media (min-width: 1300px) {
      max-width: 500px;
      height: auto;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    font-weight: bold;
    line-height: 40px;
    font-size: 20px;

    @media (min-width: 1300px) {
      font-size: 70px;
      line-height: 150px;
    }
  }

  h3 {
    line-height: 22px;
    font-size: 16px;

    @media (min-width: 1300px) {
      font-size: 30px;
      line-height: 50px;
    }

    @media (min-width: 1500px) {
      line-height: 60px;
    }
  }
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;

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

export const Voltar = styled.div`
  display: flex;
  align-items: center;
  color: rgba(114, 115, 118, 0.9);
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 3vh;
`;
