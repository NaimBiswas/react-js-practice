import React, { Component } from 'react'

export default class Refesh extends Component {
   constructor () {
      super()
      
            this.RefeshNow = this.RefeshNow.bind(this)
   }
   render() {
      return (
         <div>
            <button className="btn btn-warning btn-lg" onClick={this.RefeshNow}>Refesh</button>
            <h1>{Math.random()}</h1>
         </div>
      )
   }
   RefeshNow() {
      this.forceUpdate();
   }
}
