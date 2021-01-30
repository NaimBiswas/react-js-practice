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
   onChange = (event) => {
      var Check1 = event.target.name;
      var CheckTwo1 = event.target.value;
      this.setState({[Check1] : CheckTwo1})
      
      var Check2 = event.target.name;
      var CheckTwo2 = event.target.value;
      this.setState({ [Check2]: CheckTwo2 })
      
      var Check4 = event.target.name;
      var CheckTwo4 = event.target.value;
      this.setState({ [Check4]: CheckTwo4 })
      
      var Check3 = event.target.name;
      var CheckTwo3 = event.target.value;
      this.setState({[Check3] : CheckTwo3})
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
