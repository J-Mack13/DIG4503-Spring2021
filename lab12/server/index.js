import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';

const App = Express();
const port = 45032;
//I AM USING A DIFFERENT PORT BECAUSE "Error: listen EADDRINUSE: address already in use :::45030"

App.use(Express.json());
App.use(CORS());

const db = new Database();

db.connect("lab11", "books");

//THIS WORKS!!!!!!!! YAY LOTR IS NOW IN MONGODB!!!!!!
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
