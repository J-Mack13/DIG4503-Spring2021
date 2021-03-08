import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Location from '../Location/location.js';


function Search2(){
  const [search, setSearch] = useState("");

  const [location, setLocation] = useState({name:"N/A", id:"N/A"});

  const [loading, setLoading] = useState(false);

  function searchMonstersLocation(){
    Axios.get('https://pokeapi.co/api/v2/location/{id or name}/' + search)//pulled link from API website
    .then(function (response){
      setLocation(response.data);
      console.log(response.data);
    })
    .catch(function (error){
      console.log("Error: " + error);
      setLocation({name:"Not found", id:"N/A", sprites:{front_default:null}});
    });
  }

/* Tried to link the css with class Name, did not work even after 'control + C' and the 'npm start'*/

    return (<div>
    <input type="text" onChange={(event) => {
        setSearch(event.target.value);
      }} />
      <button onClick={() => searchMonstersLocation()}>Search Location!</button>
      {
        <p>Searched: {search}</p>
      }
     <Location location={location} />
        </div>);
}

export default Search2;

// line 30 and 36, two new things we underlined as errors, idk when that happend or why