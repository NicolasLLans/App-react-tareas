import React, { useState } from 'react';
import '../hojas-de-estilos/TareaFormulario.css'
import { v4 as uuid } from 'uuid'

function TareaFormulario(props) {

  const [input, setInput]=useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuid(),
      texto: input,
      completado: false
    }

    props.onSubmit(tareaNueva);
  };

  return(
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio} >
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
         />
         <button className='tarea-boton'>
            Agregar Tarea
         </button>
    </form>
  );
}

export default TareaFormulario;