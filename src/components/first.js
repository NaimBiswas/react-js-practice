import React from 'react';

function First(props) {
   return (
      <div>
         <h3>This is { props.name } - {props.age} </h3>
      </div>
   );
}
export default First;