import Axios from 'axios';
import {useState} from 'react';

//Note to self refer back to Lab11 or Lab12 if stuck

function GetAnime() {

const[number, setNumber] = useState("");   
const[title, setTitle] = useState("");    
const[licensors, setLicensors] = useState("");
const[source, setSource] = useState("");

const getAnime = async() => {
  const response = await Axios.get("http://localhost:45034/Animes/" + number, {
    title:title,
    licensors:licensors,
    source:source
  });
  console.log(response.data);
}

return(
  <div>
    <p>Get a Anime here.</p>
    <input type = "text" placeholder= "Type Title Here" 
      value={title} onChange={(event) => setTitle(event.target.value)}/>

    <input type = "text" placeholder="Type Licensors Name Here" 
      value={licensors} onChange={(event) => setLicensors(event.target.value)}/>

    <input type = "text" placeholder= "Type number Here" 
      value={number} onChange={(event) => setNumber(event.target.value)}/>

    <input type = "text" placeholder="Type the source Here" 
      value={source} onChange={(event) => setSource(event.target.value)}/>

    <p>Get the Anime</p>
    <button onClick = {() => {getAnime()}}>Click Me</button>
    </div>
  );
}

export default GetAnime;