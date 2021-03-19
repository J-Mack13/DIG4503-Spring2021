import Axios from 'axios';
import { useState } from 'react';

function SearchNames() {

  const [searchNames, setSearchNames] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const getNames = (name) => {
    Axios.get("http://localhost:45030/search/" + name)
    .then(response => {
      console.log(response.data);
      setSearchResults(response.data.search);
    })
    .catch(error => {
      console.log("an error has occured" + error);
    });
  }

  return (
    <div className="App">
      <p>Search for a name here!</p>
      <input type="text" onChange={(event) => setSearchNames(event.target.value)}/>
      <button onClick={() => getNames(searchNames)}>Click here to search!</button>
         {
        searchResults.map((value, index) => {
          return <p key= {index}>{value}</p>
        })
      }
    </div>
  );
}

export default SearchNames;
