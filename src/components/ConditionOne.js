import React, { Component } from 'react'

export default class ConditionOne extends Component {
   constructor () {
      super()
      this.state ={
         Login: true
      }
   }
   LogIn() {
   }
   LogOut() {
      
   }
   render() {
      if (this.state.Login === true) {
         return (
         <button className="btn btn-danger" onClick={this.LogOut}>Log Out</button>
       )
      } else {
         return (
         <button className="btn btn-success" onClick={this.LogIn}>Log In</button>
         )
      }
   }
}
