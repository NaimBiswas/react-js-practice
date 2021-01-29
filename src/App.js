import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Class from './components/Class';

function HOp() {
   return (
      <div className="App">
        {/* class based funtin  */}
         <Class   name="Naim Biswas"  ></Class>
         <Class  name="Naim Biswas 1254"  ></Class>
         <Class  name="Naim Biswas 1254"  ></Class>
         <Class  name="Naim Biswas 1254"  ></Class>
         
         
         {/* function based function  */}
        <div>
           <h2 className=''>This is Naim Biswas</h2>
           <First name="Naim"   age="20"></First>
           <First name="Biswas" age="20"></First>
           <First name="Alamin" age="20"></First>
           <First  name="Tuttul" age="20"></First>
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
