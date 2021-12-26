import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import WeatherSearch from './WeatherSearch';


function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather Time</h1>

        <p> <WeatherSearch/></p>
      
        <p>
        "Wherever you go, no matter what
         the weather, <p>always bring your
        own sunshine."</p>
      
        </p>
        <p>  Anthony J. D'Angelo</p>
        

 
        
        <a
          className="App-link"
          href="https://github.com/CosmicBee/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
         Github 
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;