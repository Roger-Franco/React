// import React from 'react';

// export default function Aleatorio (min, max) {
//   return (
//     <div>
//       {(Math.random() * (9-1) + 1).toFixed(2)}
//     </div>
//   );
// };

/* ======================= */

import React from 'react';

export default function Aleatorio (props) {
  // const min = props.min;
  // const max = props.max;
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor minimo </strong>{min}
      </p>
      <p>
        <strong>Valor maximo </strong>{max}
      </p>
      <p>
        <strong>Valor Escolhido </strong>{aleatorio}
      </p>
    </div>
  );
};