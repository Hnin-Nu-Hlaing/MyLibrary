// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passwordLength;
  let includeUpperCase;
  let includeLowerCase;
  let includeNumber;
  let includeSpecialCharacter;

  //parseInt(int ကနေ numberပြောင်းပေးတာ)
  passwordLength = parseInt(prompt("Choose password numbers within 8 to 128"));
  includeUpperCase = confirm("Upper Case letter");
  includeLowerCase = confirm("Lower Case letter");
  includeNumber = confirm("Number");
  includeSpecialCharacter = confirm("Special Char");
 
  //isNaN (not a number?)
  while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("Choose numbers 8 t0 128!");
    //return "";
    parseInt(prompt("Choose password numbers within 8 to 128"));
  }

  // || or 
  // && and

  if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSpecialCharacter)
  {
    alert("Choose again!");
    return "";
  }

  let availableCahr = "";
  if(includeUpperCase){
    availableCahr += 'ABCDEFG';
  }

  if(includeLowerCase){
    availableCahr += 'abcdefg';
  }

  if(includeNumber){
    availableCahr += '12345';
  }

  if(includeSpecialCharacter){
    availableCahr += '@#$%!^&*';
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableCahr.length)
    password += availableCahr.charAt(randomIndex);
  }

  return password;
}
