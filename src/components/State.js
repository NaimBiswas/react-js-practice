import React, { Component } from 'react'

export default class State extends Component{
   constructor () {
      super()
      
      this.state = {
         name: 'Naim Biswas',
         age: 12,
         Height: '5.67"',
         Width: '80kg',
     } 
   }
   render() {
      return (
         <div>
            <h3>{this.state.name}</h3>
            <h3 className="text-info">{this.state.age}</h3>
            <h3 className="text-success">{this.state.Height}</h3>
            <h3 className="text-danger">{this.state.Width}</h3>
            <div>
            
            </div>
         </div>
         
      )
   };
}

