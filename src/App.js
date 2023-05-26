import './App.css';
import logoMio from './imagenes/lombardito.png'
import Tareas from './componentes/Tarea'

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
          <Tareas texto='aprender React' />
      </div>
    </div>
  );
}

export default App;
