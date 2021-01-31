import React, { Component } from 'react'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import SingUpForm from '../components/SingUpForm'
import Home from './Home'
export default class Login extends Component {
   render() {
      <Router><Route path='/' component={Home}></Route> <Route path='/singup' component={SingUpForm}></Route></Router>
      return (
         <div className='pt-4 col-lg-8 offset-lg-2'>
            <table className='table table-bordered paddingBottom'>
               <thead>
                  <tr className=''>
                  <td className='text-secondary '>
                       <span className=''>Log-In Form</span> 
                        <Link to='/'><button className='btn btn-outline-danger btn-md float-right'>Go Back</button></Link> 
                  </td>
               </tr>
               </thead>
               
               <tbody>
                  <tr>
                  <td>
                     <form>
                        {/* First name section        */}
                        <div className="form-group">
                           <label  className='text-secondary'>Email Address</label>
                           <input type="email" name="" id="fistname" className="form-control" placeholder="Enter Your Email...."      aria-describedby="helpId"/>
                           </div>
                           {/* First name section        */}
                        <div className="form-group">
                           <label className='text-secondary'>Password</label>
                           <input type="password" name="" id="" className="form-control" placeholder="Enter Your Password"      aria-describedby="helpId"/>
                           </div>
                           {/* First name section        */}
                        </form>
                  </td>
               </tr>
               </tbody>
               <tfoot>
                  <tr>
                     <td>
                        
                        <button className='btn  btn-outline-success btn-md'>Login</button>
                       <span className='float-right'> If You Are Already Not A Member of This Site  Please <Link to='/singup'>Register</Link>   </span>
                     </td>
                  </tr>
               </tfoot>
            </table>
         </div>
      
      )
   }
}
