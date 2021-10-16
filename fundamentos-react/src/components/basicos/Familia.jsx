import React from 'react';
import FamiliaMembro from './FamiliaMembro';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={ props.sobrenome}/>
      <FamiliaMembro nome="Ana" {...props}/>
      <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
    </div>
  );
};

