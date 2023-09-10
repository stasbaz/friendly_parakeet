// Assignment code here
var generateBtn = document.querySelector("#generate");

//More variables for future password
var characters = 'abcdef';
var caps = 'GHIJKL';
var numbers = '213895';
var symbols = '%$@-&#';
var includeChars;
var includeCaps;
var includeNumbers;
var includeSymbols;

var mix;


var passwordLength = prompt('How many characters you want?');

if (isNaN(passwordLength)) {
  alert('You must enter a valid number.');

  var passwordLength = prompt('How many characters you want?');
}

if(passwordLength < 8) {
  alert('Password should be 8 minimum characters');

  var passwordLength = prompt('How many characters you want?');
}

if(passwordLength > 128) {
  alert('Password should be 128 characters maximum');

  var passwordLength = prompt('How many characters you want?');
}

includeChars = confirm('Include characters?');
includeCaps =  confirm('Include Uppercase letters?');
includeNumbers = confirm('Include numbers?');
includeSymbols = confirm('Include symbols?');

var blend = '';

if(includeChars) {
  blend += characters;
}
if(includeCaps) {
  blend += caps;
}
if(includeNumbers){
  blend += numbers;
}
if(includeSymbols){
  blend += symbols;
}

mix = includeChars + includeCaps + includeNumbers + includeSymbols;

function generatePassword() {
  var password = '';

  for (var index = 0; index < passwordLength; index++) {
    var randomIndex = Math.floor(Math.random() * blend.length);
    password += blend.charAt(randomIndex);
  }

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