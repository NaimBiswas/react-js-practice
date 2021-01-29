import React, { Component } from 'react'

export default class ConditionOne extends Component {
   constructor () {
      super()
      this.state ={
         Login: true
      }
   }
   LogIn() {
      this.setState({Login: false})
   }
   LogOut() {
      this.setState({Login: true})
      
   }
   render() {
      if (this.state.Login == true) {
         return (
         <button onClick={this.LogOut}></button>
       )
      } else {
         return (
         <button onClick={this.LogIn}></button>
         )
      }
   }
}
