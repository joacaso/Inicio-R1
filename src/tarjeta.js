
import React from 'react';
import './tarjeta.css'; 

const Tarjeta = ({ nombre, apellido, profesion, imagen }) => {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={`${nombre} ${apellido}`} className="tarjeta-imagen" />
      <div className="tarjeta-detalles">
        <h2>{nombre} {apellido}</h2>
        <p>{profesion}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
