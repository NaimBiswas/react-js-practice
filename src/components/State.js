import React, { Component } from 'react'

export default class State extends Component{
   constructor () {
      super()
      
      this.state = {
         name: 'Naim Biswas',
         age: 12,
     } 
   }
   render() {
      return (
         <div>
            <h3>{this.state.name}</h3>
            <h3 className="text-info">{this.state.age}</h3>
         </div>
      )
   };
}

