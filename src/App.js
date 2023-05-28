import './App.css';
import logoMio from './imagenes/lombardito.png'
import Tareas from './componentes/Tarea'
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-de-tareas">
      <div className='logo-contenedor'>
        <img
          src={logoMio}
          className='logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
          <TareaFormulario />
          <Tareas texto='aprender React' />
      </div>
    </div>
  );
}

export default App;
