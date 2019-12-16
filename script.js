
var specialChar = ['!', '"', '#', '$', '%', '&', '"', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', '<', '>', '=', '?', '@', '[', ']', "\ ", '^', '_', '`', '{', '}', '|', '~'];
var numChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
var upperchar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var isSpecial;
var isNum;
var isLower;
var isUpper;
var possibleOptions = [];



// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = prompt('How Long Would You Like Your Password To Be (between 8-128 characters)');
    if (length < 8) {
        alert ('Please Enter Number Between 8 and 128')
    }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER