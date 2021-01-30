import React, { Component } from 'react'

export default class JsonList extends Component {
   render() {
      const myJsonList = [
         {
            city: 'Dfachaka',
            zip: '6000afsd'
         }, {
            city: 'Dhaadfka',
            zip: '60sdfa00'
         }, {
            city: 'Dhasadfka',
            zip: '600fa0'
         }, {
            city: 'Dhadsafka',
            zip: '60dfsa00'
         }, {
            city: 'Dhakaadsf',
            zip: '6adf000'
         }, {
            city: 'Dhaka21',
            zip: '600sdaf0'
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
