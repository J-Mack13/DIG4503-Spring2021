import Express from 'express';
import CORS from 'cors';

const App = Express ();
const port = 45030;

App.use(CORS());

let colors = [
  "red",
  "green"
];

//create
App.put("/colors/:color", (req, res) => {
  const color = req.params.color;
  colors.push(color);
  res.json({color: color});
});

//read
App.get("/search/:color", (req, res) => {
  const color = req.params.color;
  const results = colors.filter(value => value.includes(color));
  res.json({color: results});
});

//delete
App.delete("/colors/:color", (req, res) => {
  const color = req.params.color;
  colors = colors.filter(value => value != color);
  res.json({color: color});
});

App.listen(port, () => {
  console.log("the server is running!")
});