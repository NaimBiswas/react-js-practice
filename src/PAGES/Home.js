import React, { Component } from 'react'

export class Home extends Component {
   render() {
      return (
         <div className='mt-4'>
            <div className='card-gorup col-lg-4'>
               <div className='card'>
                  <img className='card-img-top' src='holder.js.100*180/' alt='Card Image'></img>
                  <div className='card-body'>
                     <h4 className='text-secondary mt-4'>
                        This is card header
                     </h4>
                     <p className='text-secondary mt-2'>
                        This is explame text This is explame text This is explame textThis is explame textThis is explame textThis is explame textThis is explame textThis is explame textThis is explame textThis is explame textThis is explame textThis is explame textThis is explame textThis is explame 
                     </p>
                     <button className='btn btn-info btn-md'>Read More</button>
                  </div>
               </div>
            </div>
            
           
          </div>
      )
   }
}

export default Home
