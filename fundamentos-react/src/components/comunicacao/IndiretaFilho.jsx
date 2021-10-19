import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const min = 50
  const max = 70
  const gerarIdade = () => parseInt(Math.random() * (max-min)) + min
  const gerarNerd = () => Math.random() > 0.5

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={ e => props.quandoClicar("João", gerarIdade(), gerarNerd())}>
        Fornecer Informações
      </button>
    </div>
  );
};
