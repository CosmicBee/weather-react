import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather Search</h1>
        <p>
         <form>
  <label>
    
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
        </p>


        
        <a
          className="App-link"
          href="https://github.com/CosmicBee/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
         Github Link
        </a>
      </header>
    </div>
  );
}

export default App;