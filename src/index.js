import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router';


import About from './components/About';
import Portfolio from './components/Portfolio';
import SingUpForm from './components/SingUpForm';
import { Link } from 'react-router-dom';

const routing = (
   <Route>
      <div>
      <ul>
         <li><Link to='/about'>About</Link> </li>
         <li><Link to='/portfolio'>Portfolio</Link></li>
         <li><Link to='/singup'>SingUp</Link> </li>
         </ul>
         <Route  path='/about' component={About} />
         <Route  path='/portfolio' component={Portfolio} />
         <Route  path='/singup' component={SingUpForm} />
   </div>
      
   </Route>
   
   
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
