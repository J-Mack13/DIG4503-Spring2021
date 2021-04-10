import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';

const App = Express();
const port = 45032;
//I AM USING A DIFFERENT PORT BECAUSE "Error: listen EADDRINUSE: address already in use :::45030"

App.use(Express.json());
App.use(CORS);

const db = new Database();

db.connect("lab11", "books");

App.put("/books/:ISBN", async(req, res) => {
  const ISBN = req.params.ISBN;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  //Attempt1
  /*res.json({
    ISBN: ISBN,
    title: title,
    author: author,
    description: description,
  });*/
  const result = await db.createOne(ISBN, title, author, description);
  res.json(result);
});

App.get("/books/:ISBN", async(req, res) =>{
  const ISBN = req.params.ISBN;
  const result = await db.readOne(ISBN);
  //res.json({book:"not found"});
  res.json(result);
});

//THE ONLY THING I AM UNSURE OF AT THE MOMENT
App.post("books/search", (req, res) => {
  const ISBN = req.query.ISBN;
});

App.patch("/books/:ISBN", async(req, res) =>{
  const ISBN = req.params.ISBN;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description
  const result = await db.updateOne(ISBN, title, author, description);
  res.json(result);
  });

App.delete("/books/:ISBN", async(req, res) =>{
  const ISBN = req.params.ISBN;
  const result = await db.deleteOne(ISBN);
  res.json(result);
})

App.listen(port);

//TO-DO List in index.js: App.post