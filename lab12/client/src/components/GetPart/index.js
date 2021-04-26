import Axios from 'axios';
import {useState} from 'react';

//Note to self refer back to Lab8 or Lab11 if stuck

function GetPart() {

const[ISBN, setISBN] = useState("");   
const[title, setTitle] = useState("");    
const[author, setAuthor] = useState("");
const[description, setDescription] = useState("");

const getPart = async() => {
  const response = await Axios.get("http://localhost:45033/books/" + ISBN, {
    title:title,
    author:author,
    description:description
  });
  console.log(response.data);
}

return(
  <div>
    <p>Get a book here.</p>
    <input type = "text" placeholder= "Type Title Here" 
      value={title} onChange={(event) => setTitle(event.target.value)}/>

    <input type = "text" placeholder="Type Author Name Here" 
      value={author} onChange={(event) => setAuthor(event.target.value)}/>

    <input type = "text" placeholder= "Type ISBN Here" 
      value={ISBN} onChange={(event) => setISBN(event.target.value)}/>

    <input type = "text" placeholder="Type the Description Here" 
      value={description} onChange={(event) => setDescription(event.target.value)}/>

    <p>Get the Book</p>
    <button onClick = {() => {getPart()}}>Click Me</button>
    </div>
  );
}

export default GetPart;