import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img src={freeCodeCampLogo} className='logo' alt="logo de free" />
      </div>
    </div>
  );
}

export default App;
