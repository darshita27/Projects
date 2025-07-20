// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
// Critia prompts for password to generate
var uppercase = confirm("Your password should have an uppercase letter! Click OK to continue");
var lowercase = confirm("Your password should have a lowercase letter! Click OK to continue");
var symbols = confirm("Your password should have a symbol! Click OK to continue");
var numbers = confirm("Your password should have a number! Click OK to continue");
var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to continue");

// Password variables for allowable passwords characters
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var lowercaseABC ="abcdefghijklmnopqrstuvwxyz";
var specialSymbols ="!@#$%^&*()?.<\>|=+:;,[-_]"
var numeric ="0123456789"
var multiSelect =[];

//making sure user follows critia
if (keyLength < 8 || keyLength > 128) {
  alert("Your password does not meet the critia");
  var keyLength = prompt("Password must be between 8 and 128 characters in length.");
}

if (uppercaseABC === false && lowercaseABC === false && specialSymbols === false && numeric === false) {
return "Your passwords does not meet the password critia";
};

var uppercaseABC = confirm("Your password should have an uppercase letter!");
var lowercaseABC = confirm("Your password should have a lowercase letter!");
var specialSymbols = confirm("Your password should have a symbol!");
var numeric = confirm("Your password should have a number!");
}

// Demands used to call the correct critia
if (lowercaseABC) {multiSelect += lowercase}
if (uppercaseABC) {multiSelect += uppercase;}
if (numeric) {multiSelect += numbers;}
if (specialSymbols) {multiSelect += symbols;}

let finalPassword = ""
for (let i = 0; i < keyLength; i++) {
  let rng =[Math.floor(Math.random() * multiSelect.length)];
  // or finalPassword += possibleCharacters[rng];
  finalPassword = finalPassword + multiSelect[rng];
}
return finalPassword;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//