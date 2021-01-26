import axios from 'axios';

axios('https://pokeapi.co/api/v2/pokemon/333')
.then(function(response){
    const pokemon = response.data;
    console.log(pokemon.name);
})
.catch(function(error){
  console.log("Error happened!");
});

console.log("pausing dramatically!");