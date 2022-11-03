require ('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', bodyParser.urlencoded({ extended: false }), function (req, res, next) {
  console.log(req)
})
console.log("Hello World")

app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.send('Hello Express')
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/json', function(req, res){
//Variable assignment as object
var response = {
  "message": "Hello json"
};

if(process.env.MESSAGE_STYLE ==="uppercase"){
  //Override message attribute value based on condition
  response.message = response.message.toUpperCase();  
}

console.log(res.json(response));
});

app.use( (req, res, next)=>{
  console.log(req.method+""+req.path+"-"+req.ip);
  next();
  })

app.get("/now", (req, res, next) => {
    // adding a new property to req object
    // in the middleware function
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({time: req.time});
  }
);

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});






























 module.exports = app;
