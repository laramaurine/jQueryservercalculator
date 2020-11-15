console.log('hello from js');

$(document).ready(onReady);
let operator = '';
let numA = "";
let numB ="";

function onReady(){
    console.log('jquery here for the party');
    $('#clear').on('click', clearInputs)
    $('#submit').on('click', handleNumbers)
    $('#multiply').on('click', multiplinator);
   $('#add').on('click', addinator);
   $('#subtract').on('click', subtractinator);
   $('#divide').on('click', dividinator);
    
    
}


//function to render data
function handleNumbers(){
    console.log('in handleNumbers');
    let numA = $('#firstInput').val();
    let numB = $('#secondInput').val();
    let operator = $('#operator').val();
    let mathProblem = {
        numA: numA,
        numB: numB,
        operator: operator
    }
    console.log(mathProblem);
    $.ajax({
        method: 'POST',
        url: '/math',
        data: mathProblem
    }).then(function(response){
        console.log(response);
    })
    
}
function multiplinator() {
   
    mathSign = '*';
    console.log(mathSign);
 
 }
 function addinator () {
    
    mathSign = '+';
    console.log(mathSign);
 
 }
 function subtractinator () {
    
    mathSign = '-';
    console.log(mathSign);
 
 }
 function dividinator () {
    
    mathSign = '/';
    console.log(mathSign);
 
 }
 

console.log('yo yo yo');






// function submitMathProblem(){
//     console.log('submit clicked');
// }

function clearInputs(){
    //function to clear inputs -- done
    console.log('inputs cleared');
    $('#firstInput').val('');
    $('#secondInput').val('');
}