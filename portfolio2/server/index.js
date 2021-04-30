import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';

const App = Express();
const port = 45034;
//I AM USING A DIFFERENT PORT BECAUSE "Error: listen EADDRINUSE: address already in use :::45033"
//Note I am using a different port than lab 12.

App.use(Express.json());
App.use(CORS());

const db = new Database();

db.connect("portfolio2", "JuliaMurphy");

//This has been updated, GO TEST IT
//Does PUT work? ... 
App.put("/anime/:number", async(req, res) => {
  const number = req.params.number;
  const title = req.body.title;
  const licensors = req.body.licensors;
  const source = req.body.source;
  const results = await db.createOne(number, title, licensors, source);
  res.json(results);
});

//This has been updated, GO TEST IT
//Does GET work? ... 
App.get("/anime/:number", async(req, res) =>{
  const number = req.params.number;
  const result = await db.readOne(number);
  res.json(result);
});
//try query next, NOTE reference the profs YT video the example helps.

//This has been updated, GO TEST IT
//Does PATCH work? ... 
App.patch("/anime/:number", async(req, res) =>{
  const number = req.params.number;
  const title = req.body.title;
  const licensors = req.body.licensors;
  const source = req.body.source;
  const results = await db.updateOne(number, title, licensors, source);//Maybe db.collection.updateOne ?
  res.json(results);
  /*res.json({
    title: title,
    licensors: licensors,
    sourcee: source
  });*/
});

//This has been updated, GO TEST IT
//Does DELETE work? ... 
App.delete("/anime/:number", async(req, res) =>{
  const number = req.params.number;
  const results = await db.deleteOne(number);
  res.json(results);
})

App.listen(port);

/*ERROR NOTES:
    -getting a mongodb error when starting the server code.
      +solution: re-installed mongodb, it looks like it fixed it.
    -nodemon is chrashing a lot, remeber to trouble shoot.
      +
*/   

/* POTENTIAL REASONS WHY GET IS NOT WORKING:
    -Query
    -
 */