import logo from './logo.svg';
import './App.css';

function HOp() {
  return (
     <div className="App">
        <div>
           <h2>This is Naim Biswas</h2>
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='TryMe'>
         Hello World.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default HOp;
