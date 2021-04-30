import PutAnime from './components/PutAnime';
import GetAnime from './components/GetAnime';
import PatchAnime from './components/PatchAnime';
import DeleteAnime from './components/DeleteAnime';

//Rember to add the PUT, GET, PATCH, and DELETE code
//Note to self refer back to Lab11 or Lab12 if stuck

function App() {
  return (
    <div className="App">
      <PutAnime/>

        <br/>

      <GetAnime/>

        <br/>

      <PatchAnime/>

        <br/>  

      <DeleteAnime/>
    </div>
  );
}
export default App; 