console.log('hello from js');

$(document).ready(onReady);

function onReady(){
    console.log('jquery here for the party');
    $('#clear').on('click', clearInputs)
    //
    
}

//variable to send data to server
//variable to store data to splash onto dom
//function to post data
//function to clear inputs
//function to render data

function clearInputs(){
    console.log('inputs cleared');
    $('#firstInput').val('');
    $('#secondInput').val('');
}