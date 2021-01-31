import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import SingUpForm from './components/SingUpForm';
import Home from './PAGES/Home';
import Footer from './PAGES/Footer';
import Login from './PAGES/Login';


const MyRouter = (
   <div>
      
   
   <div className='container pt-4 pb-4 text-white'>
        <Router>
        <nav className="nav justify-content-center">
        <li className="nav-link  active"> 
        <Link className='text-white bg-info p-3 nav-link' to='/'>Home</Link>
        </li>
       
         <li className="nav-link " >
            <Link className='text-white bg-info p-3 nav-link' to='/singup'>SingUp</Link>
         </li>
         
         <li className="nav-link " >
            <Link className='text-white bg-info p-3 nav-link' to='/login'>Login</Link>
         </li>
               
               
      </nav>
       <div>
         <Route exact path='/' component={Home}></Route>
         <Route path='/login' component={Login}></Route>
         <Route path='/singup' component={SingUpForm}></Route>
   </div>
       
      </Router> 
      </div>
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
