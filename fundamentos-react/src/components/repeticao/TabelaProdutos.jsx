// import React from "react";
// import produtos from "../../data/produtos";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default (props) => {
//   const tabelaProdutos = produtos.map((produto) => {
//     return <li key={produto.id}>{produto.id}) {produto.nome} -> {produto.preço}</li>;
//   });
//   return <div style={{listStyle:'none'}}>{tabelaProdutos}</div>;
// };
/* ================= */

import './TabelaProdutos.css';
import React from "react";
import produtos from "../../data/produtos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ {produto.preço.toFixed(2).replace('.', ',')}</td>
        </tr>
      )
    })
  }
  
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )
};
 