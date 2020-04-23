//random variables
var password = "";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_+";
var numbers = "1234567890";



//making the questions to ask the user
var userChoice = prompt("How many characters would you like your password to be? Please provide number between 8-128.");

if (userChoice >= 8 && userChoice <= 128) {
    var upper1 = confirm("Would you like upper case characters?");
    if (upper1 === true) {
        password += upper;
    }
    console.log(password)


    var lower1 = confirm("Would you like lower case characters?");
    if (lower1 === true) {
        password += lower;
    }
    console.log(password)


    var special1 = confirm("Would you like special characters?");
    if (special1 === true) {
        password += special;
    }
    console.log(password)


    var numbers1 = confirm("Would you like numbers?");
    if (numbers1 === true) {
        password += numbers;
    }
    console.log(password)

}
//refresh if they choose not to answer
else {
    confirm("Must be between 8-128!!!");
    document.location.reload()
}



//loop
function generate() {
    
    var final = "";
    for ( i = 1; i <= userChoice; i++) {
        final += password.charAt(Math.floor(Math.random() * Math.floor(password.length)))
    }
    //password to display area
    console.log(final)

    document.getElementById("display").value = final;
}


//alert that its copied
function copyPassword() {

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password is copied to clipboard!!!");
}