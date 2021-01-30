import React, { Component } from 'react'

export default class Form extends Component {
   constructor () {
      super()
      this.state = {
         name: "THis is test name"
      }
   }
   
    onCahngeHandelar=(event)=>{
       var NewName = event.target.value;
      this.setState({name: NewName})
    }
   
   
   render() {
      return (
      <div className='col-lg-12'>
         <h4>This is Form </h4>
         <form >
            <input onChange={this.onCahngeHandelar} type="text" className='form-control' placeholder='Enter Your Text Here....'></input> <br></br>
            <input type='submit' className='form-control btn-outline-danger' value='Submit Now'></input> <br></br>
         </form>
         <div>
            <h2>Your Input Below</h2>
               <h1 className="text-danger">This is Your Text {this.state.name}</h1>
               <hr></hr>
         </div>
      </div>
   )   
      
   }
}
