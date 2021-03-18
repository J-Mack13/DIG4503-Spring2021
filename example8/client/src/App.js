import './App.css';
import Axios from 'axios';


function App() {

  const putColor = () =>{
    Axios.put("http://localhost:45030/color/aqua")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("error " + error);
    });
  }

  const getColors = () =>{
    Axios.put("http://localhost:45030/search/a")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("error " + error);
    });
  }

  const deleteColor = () =>{
    Axios.put("http://localhost:45030/colors/aqua")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("error " + error);
    });
  }



  return (
    <div className="App">
      <button onClick={() => putColor()}>Click me to test</button>
      <button onClick={() => getColors()}>Click me to test</button>
      <button onClick={() => deleteColor()}>Click me to test</button>
    </div>
  );
}

export default App;
