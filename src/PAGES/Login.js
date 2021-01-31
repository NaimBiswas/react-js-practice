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
                       <span className=''>Registration Form</span> 
                        <Link to='/'><button className='btn btn-outline-danger btn-md float-right'>Home</button></Link> 
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
                           <input type="text" name="" id="fistname" className="form-control" placeholder=""      aria-describedby="helpId"/>
                           </div>
                           {/* First name section        */}
                        <div className="form-group">
                           <label className='text-secondary'>Password</label>
                           <input type="text" name="" id="" className="form-control" placeholder=""      aria-describedby="helpId"/>
                           </div>
                           {/* First name section        */}
                        </form>
                  </td>
               </tr>
               </tbody>
               <tfoot>
                  <tr>
                     <td>
                        
                        <button className='btn  btn-outline-success btn-md'>Submit</button>
                       <span className='float-right'> If You Are Already Register Please <Link to='/login'>Log-In</Link>   </span>
                     </td>
                  </tr>
               </tfoot>
            </table>
         </div>
      
      )
   }
}
