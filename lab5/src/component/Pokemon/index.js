import React from 'react';


function Pokemon(props){
  return (<div>
    <h2>{props.pokemon.name}</h2>
    <p>{props.pokemon.id}</p>
    <img src={props.pokemon.sprites.front_default} />
  </div>);
}


export default Pokemon; 