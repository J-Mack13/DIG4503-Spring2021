import Axios from 'axios';
import {useState} from 'react';

//Note to self refer back to Lab11 or Lab12 if stuck

function DeleteAnime() {

const[number, setNumber] = useState("");   
const[title, setTitle] = useState("");    
const[licensors, setLicensors] = useState("");
const[source, setSource] = useState("");

const deleteAnime = async() => {
  const response = await Axios.delete("http://localhost:45035/Animes/" + number, {
    title:title,
    licensors:licensors,
    source:source
  });
  console.log(response.data);
}

return(
  <div>
    <p class="Question">Delete a Anime here.</p>
    <input  class="Input" type = "text" placeholder= "Title Here" 
      value={title} onChange={(event) => setTitle(event.target.value)}/>

    <input class="Input" type = "text" placeholder="Licensors Name Here" 
      value={licensors} onChange={(event) => setLicensors(event.target.value)}/>

    <input class="Input" type = "text" placeholder= "Number Here" 
      value={number} onChange={(event) => setNumber(event.target.value)}/>

    <input class="Input" type = "text" placeholder="Source Here" 
      value={source} onChange={(event) => setSource(event.target.value)}/>
    
    <p class="Submit">Delete the Anime</p>
    <button class="Button" onClick = {() => {deleteAnime()}}>Delete</button>
    </div>
  );
}

export default DeleteAnime;