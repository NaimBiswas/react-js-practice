import React, { Component } from 'react'

export default class JsonList extends Component {
   render() {
      const myJsonList = [
         {
            city: 'Dhaka',
            zip: '6000'
         }, {
            city: 'Dhaka',
            zip: '6000'
         }, {
            city: 'Dhaka',
            zip: '6000'
         }, {
            city: 'Dhaka',
            zip: '6000'
         }, {
            city: 'Dhaka',
            zip: '6000'
         }, {
            city: 'Dhaka',
            zip: '6000'
         },
      ]
      const data = myJsonList.map((allList) => {
         return <li>CityName: {allList.city} && ZipCode: { allList.zip }</li>
      })
      return (
         <div>
            <ol>{ data }</ol>
         </div>
      )
   }
}
