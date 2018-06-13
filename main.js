// Validate Selected Countries
function validateSelect(x){

    // When a new <option> is selected
    if(document.getElementById(x).selectedIndex !== 0){

        // if true change the box background to green
        document.getElementById(x).style.background ='#ccffcc';

        //hide error prompt
        document.getElementById(x + '-error').style.display = "none";
        return true;

    }else{

        // if false change the box background to red
        document.getElementById(x).style.background ='#e35152';
        return false;
    }
}

function validateForm () {
    //Set error catcher
    let error = 0;
    let answer = 0;



    //Validate select box
    if(!validateSelect('country')) {
        document.getElementById('country-error').style.display = "block";
        error++;
    }

    // Don't submit form if there are errors
    if(error > 0){
        return false;
    }
}

//The handler function to be called when the window's load event fires
window.onload = function() {

    document.getElementById('myForm')[0].addEventListener('submit', function() {
        return validateForm();
    })
};