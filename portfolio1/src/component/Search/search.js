import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Pokemon from '../Pokemon/pokemon.js';
//trying to import stylesheet
import '../Search/search.css';


function Search(){
  const [search, setSearch] = useState("");

  const [pokemon, setPokemon] = useState({name:"N/A", id:"N/A", sprites:{front_default:null}});

  const [loading, setLoading] = useState(false);

  function searchMonsters(){
    Axios.get('https://pokeapi.co/api/v2/pokemon/' + search)
    .then(function (response){
      setPokemon(response.data);
      console.log(response.data);
    })
    .catch(function (error){
      console.log("Error: " + error);
      setPokemon({name:"Not found", id:"N/A", sprites:{front_default:null}});
    });
  }

/* Tried to link the css with class Name, did not work even after 'control + C' and the 'npm start'*/

    return (<div>
    <input type="text" onChange={(event) => {
        setSearch(event.target.value);
      }} />
      <button onClick={() => searchMonsters()}>Search Pokedex!</button>
      {
        <p>Searched: {search}</p>
      }
     <Pokemon pokemon={pokemon} />
        </div>);
}

/* I originally had the contents of search2 here but an attempt on making it work I put it in its on folder, still did not work */

export default Search;