import React, { Component } from 'react'

export default class Select extends Component {
   constructor () {
      super()
      this.state = {
         name: 'Mirkamary',
      }
   }
   onChangeHandeler = (event) => {
      var selectedValue = event.target.value;
      this.setState({name: selectedValue})
   }
   render() {
      return (
         <div>
            <select onChange={this.onChangeHandeler} value={this.state.name}>
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
