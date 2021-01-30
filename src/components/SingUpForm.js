import React, { Component } from 'react'

export default class SingUpForm extends Component {
   constructor () {
      super()
      this.state = {
         fname: '',
         lname: '',
         email: '',
         phone: '',
      }
   }
   onChange = () => {
      
   }
   
   
   render() {
      return (
         <div className='col-lg-12'>
            <form>
               <input onChange={this.onChange} type="text" placeholder='Enter Your Frist Name' name='fname' className='form-control'></input> <br></br>
               
               <input onChange={this.onChange} type="text" placeholder='Enter Your Last Name' name='lname' className='form-control'></input> <br></br>
               
               <input onChange={this.onChange} type="email" placeholder='Enter Your Email Name' name='email' className='form-control'></input> <br></br>
               
               <input onChange={this.onChange} type="number" placeholder='Enter Your Phone Name' name='phone' className='form-control'></input> <br></br>
               
               <input type='submit' value='Submit'></input>
               <br></br>
               <br></br>
               <hr></hr>
            </form>
         </div>
      )
   }
}
