import CreatePart from './components/PutPart';
import GetPart from './components/GetPart';
import DeletePart from './components/DeletePart';

//Rember to add the PUT, GET, and DELETE code
//Note to self refer back to Lab8 or Lab11 if stuck

function App() {
  return (
    <div className="App">
      <CreatePart/>

        <br/>

      <GetPart/>

        <br/>

      <DeletePart/>
    </div>
  );
}
export default App; 