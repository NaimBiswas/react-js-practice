import React, { Component } from 'react'

export default class Select extends Component {
   constructor () {
      super()
      this.state = {
         name: 'Mirkamary',
      }
   }
   
   render() {
      return (
         <div>
            <select value={this.state.name}>
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
