const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

mathProblem = [];
//mathProblem = {};

app.get('/math', function(req, res){
  res.send(mathProblem);
});



  app.post('/math', (req, res)=>{
    let numA = req.body.numA;
    let numB = req.body.numB;
    let operator = req.body.operator;
    let answer = 0;
    console.log( numA, numB, operator);
//do the mathy math
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
        operator: operator,
        number2: numB,
        result: answer
      
        
        //store to array
    }
    console.log(response);
    mathProblem.push(response);
    res.send(response);
    
    

});

app.get('/math', (req, res) => {
  console.log('getting messages');
  res.send(mathProblem);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})


