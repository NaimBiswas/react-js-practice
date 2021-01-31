import React, { Component } from 'react'
import "../App.css"
import { Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Home from '../PAGES/Home'
import Login from '../PAGES/Login'
export default class SingUpForm extends Component {
   render() {
      <Router><Route path='/' component={Home}></Route> <Route path='/login' component={Login}></Route></Router>
      return (
         <div className='pt-4 col-lg-8 offset-lg-2'>
            <table className='table table-bordered'>
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
                           <label  className='text-secondary'>First Name</label>
                           <input type="text" name="" id="fistname" className="form-control" placeholder=""      aria-describedby="helpId"/>
                           </div>
                           {/* First name section        */}
                        <div className="form-group">
                           <label className='text-secondary'>Last Name</label>
                           <input type="text" name="" id="" className="form-control" placeholder=""      aria-describedby="helpId"/>
                           </div>
                           {/* First name section        */}
                        <div className="form-group">
                           <label className='text-secondary'>E-mail</label>
                           <input type="text" name="" id="" className="form-control" placeholder=""      aria-describedby="helpId"/>
                           </div>
                           {/* First name section        */}
                        <div className="form-group">
                           <label className='text-secondary'>Phone Number</label>
                           <input type="text" name="" id="" className="form-control" placeholder=""      aria-describedby="helpId"/>
                           </div>
                           {/* First name section        */}
                        <div className="form-group">
                           <label className='text-secondary'>Password</label>
                           <input type="text" name="" id="" className="form-control" placeholder=""      aria-describedby="helpId"/>
                           </div>
                           {/* First name section        */}
                        <div className="form-group">
                           <label className='text-secondary'>Confirm Password</label>
                           <input type="text" name="" id="" className="form-control" placeholder=""      aria-describedby="helpId"/>
                           </div>
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
