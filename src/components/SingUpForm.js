import React, { Component } from 'react'

export default class SingUpForm extends Component {
   render() {
      return (
         <div className='pt-4 col-lg-8 offset-lg-2'>
            <table className='table table-bordered'>
               <thead>
                  <tr>
                  <td className='text-secondary'>
                     Registration Form
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
                     </td>
                  </tr>
               </tfoot>
            </table>
         </div>
      )
   }
}
