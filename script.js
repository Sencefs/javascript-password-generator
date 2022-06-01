//Apply the function to get things started
function generatePassword() {
  var length = "";
  //Input password parameters (minimum 8, maximum 128)
  while(length < 8 || length > 128) {
    length = parseInt(prompt("Enter password length. Must be between 8 to 128 characters."));
  };

//Setting up and applying the variables
var charSet = "";
//Adding the usage of special characters
var spl = window.confirm("Add special characters?");
if (spl == true) {
    charSet += "!@#$%^&*()/\<>";
};
//Adding the usage of numerical values
var num = window.confirm("Add numbers?");
if (num == true) {
    charSet += "1234567890";
};
//Adding the usage of uppercase letters
var upp = window.confirm("Add uppercase letters?");
if (upp == true) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
};
//Adding the usage of lowercase letters
var low = window.confirm("Add lowercase letters?");
if (low == true) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
};

//Alert the user if the correct parameters are not met
if (upp == false & low == false & spl == false & num == false) {
  window.alert("Please set the password within the parameters");
};

//This is the code that creates the password
var password = "";
for(var i = 0, n = charSet.length; i < length; i++) {
  password += charSet[Math.floor(Math.random() * n)];
};

return password;
}

// Reference the #generate element
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}
 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

