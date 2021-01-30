import React, { Component } from 'react'

export default class List extends Component {
   
   render() {
      const country = ['Bangledesh', 'India', 'Canada', 'Bahrain', 'USA', 'UK']
     const dataItems =  country.map((AllCountry)=>{
         return  <option>{AllCountry}</option>
      })
      return (
         <div>
            <select>
               {dataItems}
            </select>
         </div>
      )
   }
}
