import './App.css';
import logoMio from './imagenes/lombardito.png'

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
      </div>
    </div>
  );
}

export default App;
