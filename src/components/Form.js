import React from 'react'

const Form = () => {
   return (
      <div className='col-lg-12'>
         <h4>This is Form </h4>
         <form >
            <input type="text" className='form-control' placeholder='Enter Your Text Here....'></input> <br></br>
            <input type='submit' className='form-control btn-outline-danger' value='Submit Now'></input> <br></br>
         </form>
           
          
       
      </div>
   )
}

export default Form
