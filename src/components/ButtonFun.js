import React from 'react'
function ButtonFun() {
   function  DoThis() {
      alert('This button has been clided');
   };
   return (
      <button onClick={DoThis} >This is button</button>
   )
}

export default ButtonFun;