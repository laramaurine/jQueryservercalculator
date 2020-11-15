const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


mathObject = {};

app.post('/math', (req, res) =>{
  console.log(req.body);

  let mathObject = {};

  mathObject.firstInput = req.body.firstInput;
  mathObject.secondInput = req.body.secondInput;

  app.post('/math', (req, res)=>{
    let numA = req.body.numA;
    let numB = req.body.numB;
    let operator = req.body.operator;
    let answer = 0;
    console.log( numA, numB, mathSign);
//do the mathing
    switch(operator) {
        case '+':
        answer = Number(numA) + Number(numB);
        break;
        case '-':
        answer = Number(numA) - Number(numB);
        break;
        case '*':
        answer = Number(numA) * Number(numB);
        break;
        case '/':
        answer = Number(numA) / Number(numB);
        break;
        
    }
    let response ={
        number1: numA,
        operator: mathSign,
        number2: numB,
        result: answer
      
        
        //store to array
    }
    console.log(response);
    mathing.push(response);
    res.send(response);
    //if statements not the way to go
    

});



})
//completed maths will be stored here to send to client to be splash onto dom
//store problems completed
//app.get 
//app.post with the logic (mathing of numbers, can i do this in one function
// or do i need seperate functions for each operator)

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


/