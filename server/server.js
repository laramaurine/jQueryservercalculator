const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

mathProblems = [];
problemsFromClient = [];
//completed maths will be stored here to splash onto dom
//store problems completed
//app.get 
//app.post with the logic (mathing of numbers, can i do this in one function
// or do i need seperate functions for each operator)

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
