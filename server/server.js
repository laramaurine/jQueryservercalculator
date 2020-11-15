const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

mathProblem = [];
//mathObject = {};

app.get('/math', function(req, res){
  res.send(mathProblem);
});



  app.post('/math', (req, res)=>{
    let numA = req.body.numA;
    let numB = req.body.numB;
    let operator = req.body.operator;
    let answer = 0;
    console.log( numA, numB, operator);
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


// You're really close! You're able to make calculations inn the server and able to append them to the DOM! YES!

// When I refresh the page, the history of your calculations gets wiped away. You've got the work done on the server to have the history, but we need a GET request for that history on page load. This is related to the next point:

// It looks like you're using a response from a POST for your append, Usually, the pattern is POST (send 201) -> GET (send DATA) -> append.

// So the missing piece is from your client, you need to have a GET request function, and call it on load of page to populate the history (similar append logic that you've already written), and to call it after the POST is done.

// See if you can get this working when you refresh, use Kris's livesolve for help.