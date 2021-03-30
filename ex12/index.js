import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

const d = new Database();

// Create
App.put("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;
    
    d.createOne(person);

    // Return the name just created.
    res.json({person: person});
});

// Read
App.get("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;

    let result = d.readOne(person);

    // Setup a default response.
    let result = {person: "not found"};

    

    // Return the default or searched-for result.
    res.json(result);
});

// Update
// Based on this example, there is nothing to update!

// Delete
App.delete("/people/:person", (req, res) => {
    // Save the request parameter.
    let person = req.params.person;

    d.deleteMany(person);
    
    // Return the name just deleted (regardless if it worked or not).
    res.json({person: person});
});

App.listen(port, () => {
    console.log("Server running!");
});
