import React from "react";
import produtos from "../../data/produtos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const tabelaProdutos = produtos.map((produto) => {
    return <li key={produto.id}>{produto.id}) {produto.nome} -> {produto.preço}</li>;
  });
  return <div style={{listStyle:'none'}}>{tabelaProdutos}</div>;
};
