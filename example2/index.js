import axios from 'axios';

// Fetch this URL
axios('https://pokeapi.co/api/v2/pokemon/ditto')
    // And then...
    .then(function (response) {
        // Use the 'data'
        const pokemon = response.data;

        // In this example, the above URL will return an object
        //  with data on the Pokemon requested
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    .catch(function (error) {
        // handle error
        console.log("Error: " + error);
    });

    console.log("In the meantime...");
    console.log("This code ran!");