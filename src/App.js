import React from 'react';
import './tarjeta.css';
import './App.css'

function Tarjeta({ nombre, apellido, profesion, imagen }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={`${nombre} ${apellido}`} className="tarjeta-imagen" />
      <div className="tarjeta-detalles">
        <h2>{nombre} {apellido}</h2>
        <p>{profesion}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Tarjeta 
        nombre="Joaco" 
        apellido="Fer" 
        profesion="Desarrollador Web" 
        imagen="https://via.placeholder.com/80" 
      />
    </div>
  );
}

export default App;
