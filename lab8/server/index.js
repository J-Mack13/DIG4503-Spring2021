import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());

let names = [
  'Cortney',
  'Dewayne',
  'Trenton',
  'Pamala',
  'Ettie',
  'Errol',
  'Lorrie',
  'Hang',
  'Lauryn',
  'Caterina',
  'Isa',
  'Marcela'
];

//PUT goes here             CREATE
App.put("/people/:person", (req, res) => {
  const name = req.params.person;
  names.push(name);
  res.json({name: name});
});

//GET one goes here         READ
App.get("/people/:person", (req, res) =>{
  let result = {name: "not found"};
    names.forEach((value) => {
        if(value == req.params.person){
            result = {name: value};
        }
    });
    res.json(result);
});


//GET two goes here         READ
App.get("/search/:name", (req, res) =>{
  let result = {name: "Not Found :("};
  let nameResult = [];
  names.forEach((value)=> {
    if(value.includes(req.params.name)){
      nameResult.push(value);
    }
  });
  if (nameResult.length > 0){
    result = {name: nameResult};
  }
  res.json(result);
});

//MAKE SURE THE SERVER IS RUNNING
App.listen(port, () => {
  console.log("the server is running! Happy Hacking!")
});

//DONT FORGET TO TEST SERVER CODE IN INSOMNIA!!!!