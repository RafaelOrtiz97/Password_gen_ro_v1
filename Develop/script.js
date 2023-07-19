// Assignment code here
function generatePassword() {
  var pw = "password"

  do {
    var pwLength = prompt("How many characters would you like your passwoed to be? (8-128)");
  } while (pwLength < 8 || pwLength > 128 || /^\d+$/.test(pwLength) == false);
  do {
    var pwLower = prompt("Would you like your password to contain lower case letters? (Y/N)");
  } while (pwLower != "Y" && pwLower != "y" && pwLower != "N" && pwLower != "N");
  do {
    var pwUpper = prompt("Would you like your password to contain upper case letters? (Y/N)");
  } while (pwUpper != "Y" && pwUpper != "y" && pwUpper != "N" && pwUpper != "N");
  do {
    var pwNums = prompt("Would you like your password to contain numbers? (Y/N)");
  } while (pwLower != "Y" && pwLower != "y" && pwLower != "N" && pwLower != "N");
  do {
    var pwSpecialChar = prompt("Would you like your password to contain special characters? (Y/N)");
  } while (pwLower != "Y" && pwLower != "y" && pwLower != "N" && pwLower != "N");
  
  
  console.log(pwUpper);
  console.log(pwNums);
  console.log(pwSpecialChar);



  return pw;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
