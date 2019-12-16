
var specialchar = ['!', '"', '#', '$', '%', '&', '"', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', '<', '>', '=', '?', '@', '[', ']', "\ ", '^', '_', '`', '{', '}', '|', '~'];

var numchar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


// Assignment Code
var generateBtn = document.querySelector("#generate");


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