import React, { Component } from 'react'

export default class StateChange extends Component {
   constructor () {
      super()
      this.state = {
         name: 'Default Name',
      }
   };
   
   ChangeName(a) {
     this.setState({ name: a }) 
   };
   render() {
      return (
         <div>
            <p>SetSate Name: {this.state.name}</p>
            <button onClick={ this.ChangeName.bind(this, 'ChangedName') }>Click Here to Change State</button>
         </div>
      )
   };
   
}
