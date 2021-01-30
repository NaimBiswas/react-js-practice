import React from 'react'
import Logo from '../logo.svg'
import ReactDOM from 'react-dom'

const FindDomNode = () => {
   return (
      <div>
         <button onClick={ChangeImg}> Change logo</button>
         <img id='Images' className='col-sm-2'  src={Logo} alt='Logo'></img>
         <h3>Find DOM Node</h3>
      </div>
   )
   function ChangeImg() {
      var component = document.getElementById('Images');
      ReactDOM.findDOMNode(component).style.background='gray';
      
   }
}

export default FindDomNode
