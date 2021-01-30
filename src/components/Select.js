import React, { Component } from 'react'

export default class Select extends Component {
   constructor () {
      super()
      this.state = {
         name: 'Select One of then',
      }
   }
   onChangeHandeler = (event) => {
      var selectedValue = event.target.value;
      this.setState({name: selectedValue})
   }
   render() {
      return (
         <div className='mb-4 container'>
            <h4>This is your selected Area</h4>
            <h6 className="text-danger">{ this.state.name}</h6>
            <select className='form-control' onChange={this.onChangeHandeler} value={this.state.name}>
               <option>Dhaka </option>
               <option>Rajshahi</option>
               <option>Pabna</option>
               <option>Ishawrdi</option>
               <option>Mirkamary</option>
            </select>         
         </div>
      )
   }
}
