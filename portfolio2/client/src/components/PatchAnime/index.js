import Axios from 'axios';
import {useState} from 'react';

//Note to self refer back to Lab11 or Lab12 if stuck
//MOST recent error in Insomnia "Error: Server returned nothing (no headers, no data)"
function PatchAnime() {

const[number, setNumber] = useState("");   
const[title, setTitle] = useState("");    
const[licensors, setLicensors] = useState("");
const[source, setSource] = useState("");

const patchAnime = async() => {
  const response = await Axios.put("http://localhost:45035/Animes/" + number, {
    title:title,
    licensors:licensors,
    source:source
  });
  console.log(response.data);
}

return(
  <div>
    <p>Edit your favorite Anime here.</p>
    <input type = "text" placeholder= "Type Title Here" 
      value={title} onChange={(event) => setTitle(event.target.value)}/>

    <input type = "text" placeholder="Type licensors Name Here" 
      value={licensors} onChange={(event) => setLicensors(event.target.value)}/>

    <input type = "text" placeholder= "Type number Here" 
      value={number} onChange={(event) => setNumber(event.target.value)}/>

    <input type = "text" placeholder="Type the source Here" 
      value={source} onChange={(event) => setSource(event.target.value)}/>

    <p>Edit the Anime.</p>
    <button onClick = {() => {patchAnime()}}>Click the Button</button>
    </div>
  );
}

export default PatchAnime;