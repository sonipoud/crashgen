// Assignment code here

//list all the variables 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@\^_`{|}~";
var passwordText = ""
var results = ""
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

  var upperCaseConfirm = window.confirm("What about an uppercase characters?");
  if (upperCaseConfirm) {
    passwordText = passwordText + upperCase
    results = results + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length)));
  } else {
    window.alert("You should have an uppercase characters for a secure password.")

  }

  var lowerCaseConfirm = window.confirm("What about a lowercase characters?");
  if (lowerCaseConfirm) {
    passwordText = passwordText + lowerCase
    results = results + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length)));
  } else {
    window.alert("You should have a lowercase characters for a secure password.")

  }

  var numbersConfirm = window.confirm("What about some numbers?");
  if (numbersConfirm) {
    passwordText = passwordText + numbers
    results = results + numbers.charAt(Math.floor(Math.random() * Math.floor(numbers.length)));
  } else {
    window.alert("You should have numbers for a secure password.")

  }

  var specialCharactersConfirm = window.confirm("What about special characters for a special customer?");
  if (specialCharactersConfirm) {
    passwordText = passwordText + specialCharacters
    results = results + specialCharacters.charAt(Math.floor(Math.random() * Math.floor(specialCharacters.length)));
  } else {
    window.alert("You should have special characters for a secure password.")
  }

  if (!upperCaseConfirm && !lowerCaseConfirm && !numbersConfirm && !specialCharactersConfirm) {
    window.alert("You must choose atleast one character.");
    return writePassword();
  }

  //Add for loop function
  for (var i = 0; i < passwordLength; i++) {
    results = results + passwordText.charAt(Math.floor(Math.random() * Math.floor(passwordText.length - 1)));
  }
  results = results.substring(0, passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = results;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

