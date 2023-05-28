import './App.css';
import logoMio from './imagenes/lombardito.png'
import ListaDeTareas from './componentes/ListaDeTareas';

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
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
