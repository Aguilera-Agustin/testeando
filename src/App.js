import logo from './logo.svg';
import './App.css';

function App() {

  const hacerPeticion = () =>{
    fetch('https://services.galeno.com.ar/mobile-rest-services-test/obtenerPdfCartilla/CEA') .then(e=>{console.log(e)})
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={hacerPeticion}>Hacer la petición</button>
      </header>
    </div>
  );
}

export default App;
