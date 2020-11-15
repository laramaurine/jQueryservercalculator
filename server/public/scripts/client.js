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
    //let operator = $('#operator').val();
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
        //clear inputs upon submit
        $('#firstInput').val('');
        $('#secondInput').val('');
        getMathProblems(response);
    
})
    
}
function getMathProblems(){
    $.ajax({
        method: 'GET',
        url: '/math'
    }).then( function (response){
        console.log('got math problems', response);
        renderMathProblems(response);
    })
}
function renderMathProblems( array ){
    $('#answers').empty();
    for(let item of array){
    $('#answers').append(`<li>${item.num1}
    ${item.operator}
    ${item.num2}
    =
    ${item.result}
 </li>`)
    }
}


function multiplinator() {

    operator = '*';
    console.log(operator);
 
 }
 function addinator () {
    
    operator = '+';
    console.log(operator);
 
 }
 function subtractinator () {
    
    operator = '-';
    console.log(operator);
 
 }
 function dividinator () {
    
    operator = '/';
    console.log(operator);
 
 }
 
function clearInputs(){
    //function to clear inputs when C is pushed
    console.log('inputs cleared');
    $('#firstInput').val('');
    $('#secondInput').val('');
}