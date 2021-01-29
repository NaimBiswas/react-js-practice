import React, { Component } from 'react'

class ButtonClass extends Component {
   render() {
      return (
         <div>
            <button onClick={this.DoThis}>THis is class Based Button</button>
         </div>
      )
   };
   DoThis() {
      alert('THis is class Button')
   }
}

export default ButtonClass;