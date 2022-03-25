import React from 'react';
import styled from "styled-components";

import Conversor from './components/Conversor';

const StyledH1 = styled.h1`
    text-align: center;
    color: aliceblue;
`;

const StyledRow = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: space-around;
`;

const StyledApp = styled.div`
    margin: auto;
    max-width: 900px;
`;

function App() {
  return (
    <StyledApp>
      <StyledH1>Conversor de Moedas</StyledH1>
      <StyledRow>
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="USD" />
      </StyledRow>

      <StyledRow>
        <Conversor moedaA="CAD" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="CAD" />
      </StyledRow>

      <StyledRow>
        <Conversor moedaA="EUR" moedaB="BRL" />
        <Conversor moedaA="BRL" moedaB="EUR" />
      </StyledRow>
    </StyledApp>
  );
}

export default App;
