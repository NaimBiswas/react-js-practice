import React from 'react'
import ReactDOM from 'react-dom'
 const Reactdom = () => {
   
   return (
      <div>
         <button onClick={Myfun}>Change by click</button>
         <h3 id='MyId'>This is React DOM Change </h3>
      </div>
   )
   function Myfun() {
      var container = document.getElementById('MyId');
      var element = <h2>My Name Is Naim Biswas</h2>;
      ReactDOM.render(element, container);
   }
}
export default Reactdom;