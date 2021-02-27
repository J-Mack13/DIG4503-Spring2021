import Express from 'express';

const App = Express();
const port = 45030;
//use the port from class dont get yourself confused. 

const person = {
    name: "Julia M. Murphy",
    favoritecolor: "PANTONE 18-3838 Ultra Violet"
}

App.get("/", function(req,res){
    res.send("Well hello there! (star wars reference)");
});

App.get("/person", function(req, res){
    res.json(person);
});

App.listen(port, function() {
    console.log("The server is running, yay!");
});