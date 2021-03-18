import './App.css';
import Axios from 'axios';
import { useState } from 'react';


function App() {

  const [additionalColor, setAdditionalColor] = useState("");
  const [searchColor, setSearchColor] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const putColor = (color) =>{
    Axios.put("http://localhost:45030/colors/" + color)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("error " + error);
    });
  }

  const getColors = (color) =>{
    Axios.put("http://localhost:45030/search/a" + color)
    .then(response => {
      console.log(response.data);
      setSearchResults(response.data.color)
    })
    .catch(error => {
      console.log("error " + error);
    });
  }

  const deleteColor = (color) =>{
    Axios.put("http://localhost:45030/colors/aqua" + color)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("error " + error);
    });
  }



  return (
    <div className="App">
      <input type="text" onChange={(event) => setAdditionalColor(event.target.value)} />
      <button onClick={() => putColor(additionalColor)}>Click me to test</button>
      <input type="text" onChange={(event) => setSearchColor(event.target.value)} />
      <button onClick={() => getColors(searchColor)}>Click me to test</button>
      {
        searchResults.map((value, index) => {
          return <p>{value}</p>
        })
      }
      <button onClick={() => deleteColor()}>Click me to test</button>
    </div>
  );
}

export default App;
