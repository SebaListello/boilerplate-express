require ('dotenv').config();
let express = require('express');
let app = express();

// console.log("Hello World")

// app.use("/public", express.static(__dirname + "/public"));

// app.get('/', (req, res) => {
//   res.send('Hello Express')
//   res.sendFile(__dirname + "/views/index.html");
// });

// app.get('/json', function(req, res){
// Variable assignment as object
// var response = {
//   "message": "Hello json"
// };

// if(process.env.MESSAGE_STYLE ==="uppercase"){
//   //Override message attribute value based on condition
//   response.message = response.message.toUpperCase();  
// }

// console.log(res.json(response));
// });

app.use( (req, res, next)=>{
  console.log(req.method+""+req.path+"-"+req.ip);
  next();
  })































 module.exports = app;
