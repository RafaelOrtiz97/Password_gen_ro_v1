// Assignment code here
function generatePassword() {
  var result = "";
  const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const nums = ["0","1","2","3","4","5","6","7","8","9"];
  const special = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  var charCode = [];

  do {
    var pwLength = prompt("How many characters would you like your passwoed to be? (8-128)");
  } while (pwLength < 8 || pwLength > 128 || /^\d+$/.test(pwLength) == false);
  do {
    var pwLower = prompt("Would you like your password to contain lower case letters? (Y/N)");
  } while (pwLower != "Y" && pwLower != "y" && pwLower != "N" && pwLower != "n");
  do {
    var pwUpper = prompt("Would you like your password to contain upper case letters? (Y/N)");
  } while (pwUpper != "Y" && pwUpper != "y" && pwUpper != "N" && pwUpper != "n");
  do {
    var pwNums = prompt("Would you like your password to contain numbers? (Y/N)");
  } while (pwNums != "Y" && pwNums != "y" && pwNums != "N" && pwNums != "n");
  do {
    var pwSpecialChar = prompt("Would you like your password to contain special characters? (Y/N)");
  } while (pwSpecialChar != "Y" && pwSpecialChar != "y" && pwSpecialChar != "N" && pwSpecialChar != "n");

  if (pwLower == "Y" || pwLower == "y") {
    charCode = charCode.concat(lower);
  }
  if (pwUpper == "Y" || pwUpper == "y") {
    charCode = charCode.concat(upper);
  }
  if (pwNums == "Y" || pwNums == "y") {
    charCode = charCode.concat(nums);
  }
  if (pwSpecialChar == "Y" || pwSpecialChar == "y") {
    charCode = charCode.concat(special);
  }
  
  for(let i = 0; i < pwLength; i++) {
    result += charCode[Math.floor(Math.random() * charCode.length)];
  }
  console.log(result);

  return result;
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
