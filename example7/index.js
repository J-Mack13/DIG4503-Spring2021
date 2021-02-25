import Express from 'express';

const App = Express();
const port = 45030;

const cat = {
  color: "Calico",
  name: "Margo",
  legs: 4
};

App.get("/", function(req, res){
  res.json(cat);
});

App.listen(port, function() {
  console.log("Server is running");
});