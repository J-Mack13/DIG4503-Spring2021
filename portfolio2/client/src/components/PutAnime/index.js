import Axios from 'axios';
import {useState} from 'react';

//Note to self refer back to Lab11 or Lab12 if stuck

function PutAnime() {

const[number, setNumber] = useState("");   
const[title, setTitle] = useState("");    
const[licensors, setLicensors] = useState("");
const[source, setSource] = useState("");

const putAnime = async() => {
  const response = await Axios.put("http://localhost:45035/anime/" + number, {
    title:title,
    licensors:licensors,
    source:source
  });
  console.log(response.data);
}

return(
  <div>
    <p className="Question">Type your favorite Anime here.</p>
    <input className="Input" type = "text" placeholder= "Title Here" 
      value={title} onChange={(event) => setTitle(event.target.value)}/>

    <input className="Input" type = "text" placeholder="licensors Name Here" 
      value={licensors} onChange={(event) => setLicensors(event.target.value)}/>

    <input className="Input" type = "text" placeholder= "Number Here" 
      value={number} onChange={(event) => setNumber(event.target.value)}/>

    <input className="Input" type = "text" placeholder="Type the source Here" 
      value={source} onChange={(event) => setSource(event.target.value)}/>

    <p className="Submit">Put the Anime.</p>
    <button className="Button" onClick = {() => {putAnime()}}>Put</button>
    </div>
  );
}

export default PutAnime;