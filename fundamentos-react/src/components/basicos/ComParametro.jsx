import React from 'react';

export default function ComParametro(props) {
  console.log(props);

  const status = props.nota > 7 ? 'aprovado' : 'recuperação'
   
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>{props.subtitulo}</h3>
      <strong>{props.aluno} </strong>
      foi
      <strong> {status} </strong> 
      com a nota de 
      <strong> {props.nota}</strong>
    </div>
  )
}