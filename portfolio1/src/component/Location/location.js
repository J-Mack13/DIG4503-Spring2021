import React from 'react';

function Location(props){
  return (<div>
    <h2>{props.location.region}</h2>
    <p>{props.location.id}</p>
  </div>);
}


export default Location; 