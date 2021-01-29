import React, { Component } from 'react'

export default class State extends Component{
   constructor () {
      super()
      
      this.state = {
        name: 'Naim Biswas',
     } 
   }
   
   
   render() {
      return (
         <div>
            <h3>{this.state.name}</h3>
         </div>
      )
   };
}