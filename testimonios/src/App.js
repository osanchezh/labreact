import './App.css';
import {Testimonio} from './componentes/Testimonio.js';
import data from './datos/data.js';

function App() {
  return (
    
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {data.map(dato => (
        <Testimonio
          nombre={dato.nombre}
          pais={dato.pais}
          imagen={dato.imagen}
          cargo={dato.cargo}
          empresa={dato.nempresaombre}
          testimonio={dato.testimonio.descripcion}/>
          ))}
      </div>
    </div>
  );
}

export default App;
