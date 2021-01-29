import React from 'react'
function ButtonFun() {
  
   return (
      <button onClick={DoThis} >This is button</button>
   );
   // Button Click Fucntion 
    function  DoThis() {
      alert('This button has been clided');
   };
}

export default ButtonFun;