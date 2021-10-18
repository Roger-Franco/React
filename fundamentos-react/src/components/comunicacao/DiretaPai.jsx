import React from 'react';
import DiretaFilho from './DiretaFilho';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Gabriel" idade={17} nerd={false}></DiretaFilho>
    </div>
  );
};