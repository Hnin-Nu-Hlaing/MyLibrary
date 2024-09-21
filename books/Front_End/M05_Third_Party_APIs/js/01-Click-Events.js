//$ - document.getElementID
var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34); 
}
//Math.random ka 0 to 0.9 (110)
//0 to 15 ko lopping ta kar sii 15times 

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0;
     i < num; //15
      i++) {
    password += getPasswordCharacter(); 
  }
  return password;
}

//addEventListener('click'){ }
passwordBtnEl.on('click', () => {
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
//textContent , innerHTMl
