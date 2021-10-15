import React from "react";

import Card from './components/layout/Card'
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Fragmento from "./components/basicos/Fragmento";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div id="App">
      <h1>Fundamentos React</h1>
      <Card titulo="#04 - Desafio aleatório"><Aleatorio min={1} max={60} /></Card>
      <Card titulo="#3 - Fragmento"><Fragmento /></Card>
      <Card titulo="#2 - Com Parâmetro"><ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}  /></Card>
      <Card titulo="#01 - Primeiro Componente"><Primeiro /></Card>
      
      
      
    </div>
  );
}
