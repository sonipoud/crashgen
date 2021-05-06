// Assignment code here
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["1234567890"];
var specialCharacters = [" !#$%&'()*+,-./:;<=>?@\^_`{|}~ "];
var passwordText = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt("How many characters would you like to be between 8-128 characters?");

  if (passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return writePassword();
  }

  //Write if and else statements
  if (passwordLength < 8) {
    window.alert("Password must be more than 7 characters");
    return writePassword();
  }

  if (passwordLength > 128) {
    window.alert("Password must be less than 129 characters");
    return writePassword();
  }

  var upperCase = window.confirm("What about an uppercase characters?");
  if (upperCase) {
    passwordC = passwordText + upperCase
  } else {
    window.alert("You should have an uppercase characters for a secure password.")

  }

  var lowerCase = window.confirm("What about a lowercase characters?");
  if (lowerCase) {
    passwordText = passwordText + lowerCase
  } else {
    window.alert("You should have a lowercase characters for a secure password.")

  }

  var numbers = window.confirm("What about some numbers?");
  if (numbers) {
    passwordText = passwordText + numbers
  } else {
    window.alert("You should have numbers for a secure password.")

  }

  var specialCharacters = window.confirm("What about special characters for a special customer?");
  if (specialCharacters) {
    passwordText = passwordText + specialCharacters
  } else {
    window.alert("You should have special characters for a secure password.")
  }

};

// var passwordText = generatePassword();
// var passwordText = document.querySelector("#password");
// passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

