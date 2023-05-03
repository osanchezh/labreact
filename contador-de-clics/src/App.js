import './App.css';
import freeCodeLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import {useState} from 'react';

function App() {
  const [numClics, setNumClics]= useState(0);

  const manejarClick = () => {
    setNumClics (numClics+1);
  }
  const reiniciarContador = () =>{
    setNumClics (0);;
  }
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={freeCodeLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />        
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClick}/>
        
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
