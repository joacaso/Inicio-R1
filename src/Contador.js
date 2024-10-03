import React, { useState } from 'react';
import './Contador.css';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador">
      <h2>Contador: {contador}</h2>
      <div className="botones">
        <button onClick={incrementar}>Aumentar</button>
        <button onClick={decrementar}>Disminuir</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Contador />
    </div>
  );
}

export default App;
