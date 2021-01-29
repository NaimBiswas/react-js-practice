import React from 'react'
function ButtonFun() {
  
   return (
      <button onClick={DoThis.bind(this, 'THis is agrumend passed test')} >This is button</button>
   );
   // Button Click Fucntion 
    function  DoThis(a) {
      alert(a);
   };
}

export default ButtonFun;