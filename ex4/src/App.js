import HomePage from './components/HomePage';

function App (){

  let example = {
    firstProperty: "This One!",
    anotherProperty: "Another One!"
  }

  return (
    <div>
      <HomePage firstName="julia" />
      <p>{example.firstPropertyb }</p>
    </div> 
  )
}

export default App;

