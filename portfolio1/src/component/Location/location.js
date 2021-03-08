import React from 'react';

function Location(props){
  return (<div>
    <h2>{props.location.name}</h2> 
    <p>{props.location.id}</p>
  </div>);
}


export default Location; 

/*NOTE my location code is finally influencing the react server, it was an import issue! 
Bad news now it is broken*/
/* I tried to change the location. to work with the API
Update still not working, note it  is the same error, check search2.js page next for possible solution*/
/* 90% positive it is not an export or inport issue or spelling */
