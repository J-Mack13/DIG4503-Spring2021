import Axios from 'axios';
import { useState } from 'react';

function PutNames() {

  const [additonalName, setAdditionalName] = useState("");

  const putName = (name) => {
    Axios.put("http:localhost:45030/names/" + name)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("an error has occured" + error);
    });
  }


  return (
    <div className="App">
      <p>Add a name here!</p>
      <input type="text" onChange={(event) => setAdditionalName(event.target.value)}/>
      <button onClick={(putName(additonalName))}>Click to add a name!</button>
    </div>
  );
}

export default PutNames;
