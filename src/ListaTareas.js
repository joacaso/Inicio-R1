import React, { useState } from 'react';
import './ListaTareas.css';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const marcarCompletada = (index) => {
    const nuevasTareas = tareas.map((tarea, i) => {
      if (i === index) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="lista-tareas">
      <h2>Lista de Tareas</h2>
      <div className="agregar-tarea">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} className="tarea">
            <span
              onClick={() => marcarCompletada(index)}
              className={tarea.completada ? 'completada' : ''}
            >
              {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(index)} className="eliminar">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ListaTareas />
    </div>
  );
}

export default App;

