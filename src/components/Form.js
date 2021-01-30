import React, { Component } from 'react'

export default class Form extends Component {
   constructor () {
      super()
      this.state = {
         FirstName: "",
         MiddleName: "",
         LastName: ""
      }
   }
   
    onCahngeHandelar=(event)=>{
       var FirstName = event.target.name;
      var NewFristName = event.target.value;       
       this.setState({ [FirstName]: NewFristName })
       
       var MiddleName = event.target.name;
      var NewMiddleName = event.target.value;       
       this.setState({ [MiddleName]: NewMiddleName })
       
       var LastName = event.target.name;
      var NewLastName = event.target.value;       
      this.setState({[LastName]: NewLastName})
      
    }
   OnSubmitHandeler = () => {
      alert(this.state.FirstName)
      alert(this.state.MiddleName)
      alert(this.state.LastName)
   }
   
   render() {
      return (
      <div className='col-lg-12'>
         <h4>This is Form </h4>
         <form onSubmit={this.OnSubmitHandeler}>
               <input name='FirstName' onChange={this.onCahngeHandelar} type="text" className='form-control' placeholder='Enter Your Text Here....'></input> <br></br>
               
               <input name='MiddleName' onChange={this.onCahngeHandelar} type="text" className='form-control' placeholder='Enter Your Text Here....'></input> <br></br>
               
               <input name='LastName' onChange={this.onCahngeHandelar} type="text" className='form-control' placeholder='Enter Your Text Here....'></input> <br></br>
               
               
            <input type='submit' className='form-control btn-outline-danger' value='Submit Now'></input> <br></br>
         </form>
         <div>
            <h2>Your Input Below</h2>
               <h6 className="text-danger">This is Your Text : {this.state.FirstName}</h6>
               <h6 className="text-danger">This is Your Text :  {this.state.MiddleName}</h6>
               <h6 className="text-danger">This is Your Text : {this.state.LastName}</h6>
               <hr></hr>
         </div>
      </div>
   )   
      
   }
}
