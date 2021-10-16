import React from "react";

import './App.css';

import Card from "./components/layout/Card";

import Familia from "./components/basicos/Familia";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Fragmento from "./components/basicos/Fragmento";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#05 - Componentes com filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira"/>
        </Card>
        <Card titulo="#04 - Desafio aleatório" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>
        <Card titulo="#3 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>
        <Card titulo="#2 - Com Parâmetro" color="#E8B71A">
          <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
