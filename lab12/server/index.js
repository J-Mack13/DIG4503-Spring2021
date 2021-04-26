import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';

const App = Express();
const port = 45033;
//I AM USING A DIFFERENT PORT BECAUSE "Error: listen EADDRINUSE: address already in use :::45032"
//I am using the same port from lab11, it works thankfully. 

App.use(Express.json());
App.use(CORS());

const db = new Database();

db.connect("lab11", "books");

//THIS WORKS!!!!!!!! YAY THE EXPANSE BOOKS ARE NOW IN MONGODB!!!!!!
App.put("/books/:ISBN", async(req, res) => {
  const ISBN = req.params.ISBN;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const results = await db.createOne(ISBN, title, author, description);
  res.json(results);
});

App.get("/books/:ISBN", async(req, res) =>{
  const ISBN = req.params.ISBN;
  const result = await db.readOne(ISBN);
  res.json(result);
});

//THIS WORKS!!!!!!!!
App.delete("/books/:ISBN", async(req, res) =>{
  const ISBN = req.params.ISBN;
  const results = await db.deleteOne(ISBN);
  res.json(results);
})

App.listen(port);

/*ERROR NOTES:
    -getting a mongodb error when starting the server code.
      +solution: re-installed mongodb, it looks like it fixed it.
    -nodemon is chrashing a lot, remeber to trouble shot.
      +
*/   

/* POTENTIAL REASONS WHY GET IS NOT WORKING:
    -Query
    -
 */