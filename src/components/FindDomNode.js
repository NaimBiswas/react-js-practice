import React from 'react'
import Logo from '../logo.svg'

const FindDomNode = () => {
   return (
      <div>
         <button> Change logo</button>
         <img className='col-sm-2'  src={Logo} alt='Logo'></img>
         <h3>Find DOM Node</h3>
      </div>
   )
}

export default FindDomNode
