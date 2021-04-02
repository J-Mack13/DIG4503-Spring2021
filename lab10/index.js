import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());

App.put("/people/:create", (req, res) => {
  res.json(
    {
      create: req.params.create,
      body: req.body
    }
  );
});

App.get("/people/:person", (req, res) => {
  res.json(
    {person: "Not Found!"}
  );
});

App.listen(port, () => {
    console.log("The Server Is Running!");
});