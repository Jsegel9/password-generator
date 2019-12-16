
var specialChar = ['!', '"', '#', '$', '%', '&', '"', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', '<', '>', '=', '?', '@', '[', ']', "\ ", '^', '_', '`', '{', '}', '|', '~'];
var numChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var isSpecial;
var isNum;
var isLower;
var isUpper;
var possibleOptions = [];
var length

// document.getElementById("generate").addEventListener("click",buttonClick); 
// generateBtn.addEventListener("click", buttonClick);

// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", buttonClick);
// function buttonClick() {
//     document.getElementById("generate")
// }

function buttonClick() {
    isLower = confirm("Would you like to use lower case letters?");
    isUpper = confirm("Would you like to use upper case letters?");
    isNum = confirm("Would you like to use numbers?");
    isSpecial = confirm("Would you like to use special characters?");
    length = prompt('How Long Would You Like Your Password To Be (between 8-128 characters)');
    if (length < 8 || isNaN(length)) {
        alert ('Please Enter Number Between 8 and 128')
    }
    optionBuilder();
}
function optionBuilder() {
    if (isLower || isUpper || isNum || isSpecial) {
        if (isLower) {
            possibleOptions = possibleOptions.concat(lowerChar);
        }
        if (isUpper) {
            possibleOptions = possibleOptions.concat(upperChar);
        }
        if (isNum) {
            possibleOptions = possibleOptions.concat(numChar);
        }
        if (isSpecial) {
            possibleOptions = possibleOptions.concat(specialChar);
        }
       getPassword(); 
    }
   else {
       alert('Please confirm at least one option');
       buttonClick();
   } 
}
function getPassword() {
    var pword = "";
    for (var i = 0; i < length; i++) {
        var rando = randomNumber();
        pword += possibleOptions[rando]
    }
alert(pword)    
}
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
function randomNumber() {
    return Math.floor(Math.random() * possibleOptions.length)
 };