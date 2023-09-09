// Assignment code here
var generateBtn = document.querySelector("#generate");

//More variables for future password
var letters = 'abcdef';
var lettersCaps = 'GHIJKL';
var numbers = '213895';
var signs = '%$@-&#';

var mix = letters + lettersCaps + numbers + signs;
var password = '';


var includeLetters = confirm('Include letters?');
var includeCaps = confirm('Include CAPS letters?');
var includeNumbers = confirm('Include numbers?');
var includeSigns = confirm('Include signs?');

var passwordLength = prompt('How many characters you want?');


if (includeLetters) {
  mix += letters;
}
if (includeCaps) {
  mix += lettersCaps;
}
if (includeNumbers) {
  mix += numbers;
}
if (includeSigns) {
  mix += signs;
}

for (var quantity = 0; quantity < passwordLength; quantity++) {
  var random = Math.random();
  var roundUp = Math.floor(mix + passwordLength);
}

function generatePassword() {


  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);