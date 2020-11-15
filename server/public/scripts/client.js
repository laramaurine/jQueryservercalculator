console.log('hello from js');

$(document).ready(onReady);

function onReady(){
    console.log('jquery here for the party');
    $('#clear').on('click', clearInputs)
    $('#submit').on('click', submitMathProblem)
    //
    
}

//variable to send data(numbers) to server .data
//variable to store data to splash onto dom
//function to post data

//function to render data
function handleNumbers(){
    let numbers = {
        num1: $('#firstInput').val(),
        operator: $('#perator').val(),
        num2: $('#secondInput').val()
    }
    //this packages up the info from the dom
    //getting it ready to send
    console.log('handling the numbers');
}

function renderMath(){
    $('#answers').empty();
    for(let mathProblem of mathArray){
        $('#answers').append(`<li></li>`)
    }
}
function submitMathProblem(){
    console.log('submit clicked');
}

function clearInputs(){
    //function to clear inputs -- done
    console.log('inputs cleared');
    $('#firstInput').val('');
    $('#secondInput').val('');
}