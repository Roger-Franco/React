import React from "react";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default function App(props) {
  return (
    <div>
      <Aleatorio min={1} max={60} />
      {/* <Fragamento /> */}
      <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}  />
      <Primeiro />
    </div>
  );
}
