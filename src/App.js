import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Class from './components/Class';

function HOp() {
   return (
      <div className="App">
        {/* class based funtin  */}
         <Class></Class>
         {/* function based function  */}
        <div>
           <h2>This is Naim Biswas</h2>
           <First></First>
         </div>
         {/* defualt function  */}
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
