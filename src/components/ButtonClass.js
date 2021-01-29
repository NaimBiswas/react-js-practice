import React, { Component } from 'react'

class ButtonClass extends Component {
   render() {
      return (
         <div>
            <button onClick={this.DoThis.bind(this,'THis is test class argument')}>THis is class Based Button</button>
         </div>
      )
   };
   DoThis(a) {
      alert(a)
   }
}

export default ButtonClass;