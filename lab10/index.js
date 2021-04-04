import Express from 'express';
import Database from './Database.js';

const App = Express();
//!! My sever would not run but once I made it into 45031 it worked! I hope it is ok that I changed it. 
const port = 45031;
const d = new Database();

App.use(Express.json());

//create
App.put("/people/:create", (req, res) => {
  let person = req.body;
  let result = d.readOne(person);
  res.json(result);
});

//read
App.get("/people/:person", (req, res) => {
  let person = req.params.person;
  let result = d.readOne(person);
  res.json(result);
});


//test
App.listen(port, function() {
    console.log("The Server Is Running!");
});

//Insomnia Test Notes: 1)Yay the sever is running in teminal, time to check Insomnia; 
//                     2)Something is wrong with "found.One" ~Solution! i miss spelled it fml;
//                     3)Something is still wrong with "foundOne" ~Solution! it was supposed to be "findOne" + i need more cofffee;
//                     4)Something is still wrong with "findOne" idk what though, NOTE this is the ERROR: "Cannot read property 'findOne' of null"
//                       4.1)It does NOT involve lines 18-23 i think
//                       4.2)Maybe I am testing my code wrong in Insomnia?