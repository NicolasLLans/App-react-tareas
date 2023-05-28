import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilos/ListaDeTareas.css';
import Tarea from './Tarea.js'
function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);



  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
          <Tarea
          texto={tarea.texto}
          completada={tarea.completada} 
          />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;