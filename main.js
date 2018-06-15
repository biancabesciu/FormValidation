//Validate Name
function validateFullName(field) {
    let regexp = /[A-Za-z -']$/;

    if(regexp.test(document.getElementById(field).value)) {
        // if true change the box background to green
        document.getElementById(field).style.background = '#ccffcc';

        //hide error prompt
        document.getElementById(field + '-error').style.display = "none";
        return true;

    } else {
        //if false change the box background to red
        document.getElementById(field).style.background ='#e35152';

        //show error prompt
        document.getElementById(field + '-error').style.display = "block";
        return false;
    }
}


// Validate Selected Countries
function validateCountry(input){
    let regexp = /[A-Za-z -']$/;
    // When a new <option> is selected
    if(regexp.test(document.getElementById(input).value)){

        // if true change the box background to green
        document.getElementById(input).style.background ='#ccffcc';

        //hide error prompt
        document.getElementById(input + '-error').style.display = "none";
        return true;

    } else {

        // if false change the box background to red
        document.getElementById(input).style.background ='#e35152';
        return false;
    }
}

// Validate email
function validateEmail(email){

    // set of rules for the input field
    let regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regexp.test(email)){

        // if true change the box background to green
        document.getElementById('email').style.background ='#ccffcc';

        //hide error prompt
        document.getElementById('email-error').style.display = "none";
        return true;

    } else {

        // if false change the box background to red
        document.getElementById('email').style.background ='#e35152';

        //show error prompt
        document.getElementById('email-error').style.display = "block";
        return false;
    }
}

//Validate phone
// function validatePhone(number) {
//     //set of rules
//     let regexp = ;
// }

function validateForm () {
    //Set error catcher
    let error = 0;
    let answer = 0;

    //Validate name
    if(!validateFullName('fullName')) {
        document.getElementById('fullName-error').style.display = "block";
        error++;
    }

    //Validate select box
    if(!validateCountry('country')) {
        document.getElementById('country-error').style.display = "block";
        error++;
    }

    //Validate email
    if(!validateEmail(document.getElementById('email').value)) {
        document.getElementById('email-error').style.display = "block";
        error++;
    }

    // Don't submit form if there are errors
    if(error > 0){
        return false;
    }
}

//The handler function to be called when the window's load event fires
window.addEventListener('load', function() {
    const form = document.getElementById('myForm');

    form[0].addEventListener('submit', function() {
        event.preventDefault();
        event.stopPropagation();

        // Display progress bar
        document.getElementById('loading').show();

        return validateForm();
    }, false);
}, false);