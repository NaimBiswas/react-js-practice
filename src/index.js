import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import About from './components/About';
import Portfolio from './components/Portfolio';
import SingUpForm from './components/SingUpForm';
import Home from './PAGES/Home';
import Footer from './PAGES/Footer';


const MyRouter = (
   <div className='container pt-4 pb-4 text-white'>
        <Router>
      <nav className="nav justify-content-center">
        <li className="nav-link  active"> <Link className='text-white bg-danger p-3' to='/'>Home</Link></li>
        <li className="nav-link " ><Link className='text-white bg-danger p-3' to='/about'>About</Link></li>
        <li className="nav-link " ><Link className='text-white bg-danger p-3' to='/portfolio'>Portfolio</Link></li>
        <li className="nav-link " >  <Link className='text-white bg-danger p-3' to='/singup'>SingUp</Link></li>
      </nav>
       <div>
          <Route exact path='/' component={Home}></Route>
         <Route path='/about' component={About}></Route>
         <Route path='/portfolio' component={Portfolio}></Route>
         <Route path='/singup' component={SingUpForm}></Route>
   </div>
       
      </Router> 
      <Footer></Footer>
   </div>
   
)
// ReactDOM.render(MyRouter, document.getElementById('root'))
ReactDOM.render(
  
    MyRouter,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
