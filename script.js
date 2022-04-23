// Assignment Code
var generateBtn = document.querySelector("#generate");
// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()
var charSet = "";

function generatePassword() {
  // Prompt user to select length, default to 8 if greater than 128 or less than 8
  var lengthOption = prompt("Length(8-128):");
  if (lengthOption > 128 || lengthOption < 8) {
    lengthOption = 8;
  }
  // Prompt user to select lowercase option; if yes add lowercase characters to var charSet
  let lowercaseOption = prompt("Lowercase(yes/no):");
  switch (lowercaseOption) {
    case "yes":
    case "Yes":
    case "YES":
    case "y":
    case "Y":
      charSet += "abcdefghijklmnopqrstuvwxyz";
    break;
    case "no":
    case "No":
    case "NO":
    case "n":
    case "N":
    break;
    default:
    break;
  }
  // Prompt user to select uppercase option; if yes add uppercase characters to var charSet
  let uppercaseOption = prompt("Uppercase(yes/no):");
  switch (uppercaseOption) {
    case "yes":
    case "Yes":
    case "YES":
    case "y":
    case "Y":
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    break;
    case "no":
    case "No":
    case "NO":
    case "n":
    case "N":
    break;
    default:
    break;
  }
  // Prompt user to select numeric option; if yes add numeric characters to var charSet
  let numericOption = prompt("Numeric(yes/no):");
  switch (numericOption) {
    case "yes":
    case "Yes":
    case "YES":
    case "y":
    case "Y":
      charSet += "0123456789";
    break;
    case "no":
    case "No":
    case "NO":
    case "n":
    case "N":
    break;
    default:
    break;
  }
  // Prompt user to select special characters option; if yes add special characters to var charSet
  let specialOption = prompt("Special characters(yes/no):");
  switch (specialOption) {
    case "yes":
    case "Yes":
    case "YES":
    case "y":
    case "Y":
      charSet += "!@#$%^&*()";
    break;
    case "no":
    case "No":
    case "NO":
    case "n":
    case "N":
    break;
    default:
    break;
  }
  // Create new variable to generate password based off given user inputs
  var randomPass = "";
  for (var i = 0, n = charSet.length; i < lengthOption; i++) {
    randomPass += charSet.charAt(Math.floor(Math.random() * n));
  }
  // Failsafe to remove lowercase
  switch (lowercaseOption) {
    case "no":
    case "No":
    case "NO":
    case "n":
    case "N":
      charSet.toUpperCase;
    break;
    default:
    break;
  }
  // Default to lowercase characters if user selected no options
  if (randomPass.length <= 2) {
    window.alert("Since no options were selected, lowercase was selected by default");
    charSet = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0, n = charSet.length; i < lengthOption; i++) {
      randomPass += charSet.charAt(Math.floor(Math.random() * n));
    }
    charSet = "";
    return randomPass;
  } else {
    // One more lowercase failsafe
    switch (lowercaseOption) {
      case "no":
      case "No":
      case "NO":
      case "n":
      case "N":
        charSet.toUpperCase;
      break;
      default:
      break;
    }
    // Reset var charSet incase user would like to generate another password
    charSet = "";
    return randomPass;
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
