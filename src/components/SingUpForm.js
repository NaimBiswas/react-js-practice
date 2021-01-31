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
                        <div className="form-group">
                           <label className='text-secondary'>Help text</label>
                           <input type="text" name="" id="" className="form-control" placeholder=""      aria-describedby="helpId"/>
                       </div>      
                    </form>
                  </td>
               </tr>
               </tbody>
            </table>
         </div>
      )
   }
}
