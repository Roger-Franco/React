import React from 'react';

const Megasena = () => {
  let jogo =[];

  for(let i = 0; i < 7; i++) {
    let numeroSorteado = Math.round(Math.random() * 60)
    while(jogo.includes(numeroSorteado)) {
      numeroSorteado = Math.round(Math.random() * 60)
    }
    jogo.push(numeroSorteado)
  }


  // const num1 = parseInt(Math.random() * 60)
  // const num2 = parseInt(Math.random() * 60)
  // const num3 = parseInt(Math.random() * 60)
  // const num4 = parseInt(Math.random() * 60)
  // const num5 = parseInt(Math.random() * 60)
  // const num6 = parseInt(Math.random() * 60)
  // const num7 = parseInt(Math.random() * 60)
  return (
    <div>
      <h3>{jogo[0]}</h3>
      <h3>{jogo[1]}</h3>
      <h3>{jogo[2]}</h3>
      <h3>{jogo[3]}</h3>
      <h3>{jogo[4]}</h3>
      <h3>{jogo[5]}</h3>
      <h3>{jogo[6]}</h3>
      <h3>{jogo[7]}</h3>
      {/* <h3>{num1}</h3>
      <h3>{num2}</h3>
      <h3>{num3}</h3>
      <h3>{num4}</h3>
      <h3>{num5}</h3>
      <h3>{num6}</h3>
      <h3>{num7}</h3> */}
    </div>
  );
};

export default Megasena;