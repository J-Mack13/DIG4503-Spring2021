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

App.put("/books/:ISBN", (req, res) => {
  const ISBN = req.params.ISBN;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  res.json({
    ISBN: ISBN,
    title: title,
    author: author,
    description: description,
  });
});

App.get("/books/:ISBN", (req, res) =>{
  const ISBN = req.params.ISBN;
  //Do I need to add anything else here
  res.json({book:"not found"});
});

//THE ONLY THING I AM UNSURE OF AT THE MOMENT
App.post("/books/search", (req, res) =>
res.json()//URLParameters in the ()????
)

App.patch("/books/:ISBN", (req, res) =>{
  const ISBN = req.params.ISBN;
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description
  //Attempt 1
  /*const result = await db.updateOne(ISBN, title, author, description);
  res.json(result);*/
  res.json({
    ISBN: ISBN,
    title: title,
    author: author,
    description: description,
  });
})

App.delete("/books/:ISBN", async(req, res) =>{
  const ISBN = req.params.ISBN;
  const result = await db.deleteOne(ISBN);
  res.json(result);
})

App.listen(port);

//TO-DO List in index.js: App.post