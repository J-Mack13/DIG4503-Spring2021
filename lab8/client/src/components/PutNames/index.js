import Axios from 'axios';
import { useState } from 'react';

function PutNames() {

  const [additonalName, setAdditionalName] = useState("");

//UPDATE I can now see what I input for the PUT section
//       but it submits everytime a type and it shows up when I search with GET
  const putName = (names) => {
    Axios.put("http://localhost:45030/people/" + names)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("an error has occured" + error);
    });
  };



  return (
    <div className="App">
      <p>Add a name here!</p>
      <input type="text" onChange={(event) => setAdditionalName(event.target.value)}/>
      <button onClick={(putName(additonalName))}>Click to add a name!</button>
    </div>
  );
}

export default PutNames;
