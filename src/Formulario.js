import React, { useState } from 'react';
import './Formulario.css';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (e) => {
    setNombre(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    setMensaje(`¡Bienvenido, ${nombre}!`);
    setNombre('');
  };

  return (
    <div className="formulario">
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          value={nombre}
          onChange={manejarCambio}
          placeholder="Ingresa tu nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Formulario />
    </div>
  );
}

export default App;
