let express = require('express');
let app = express();

console.log("Hello World")

app.get('/', (req, res) => {
//   res.send('Hello Express')
  res.sendFile(__dirname + relativePath/views/index.html);
})
































 module.exports = app;
