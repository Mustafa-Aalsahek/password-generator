function generatePassword() {
    // Initialize variables
    var password = "";
    var possibleChars = "";
    var possibleSymbols = "!@#%^&*()_+-=[]{}|;':\"<>,.?/\\";
    var length = document.getElementById("length-slider").value;
    
    // Determine which character sets to include
    if (document.getElementById("include-uppercase").checked) {
      possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("include-lowercase").checked) {
      possibleChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("include-numbers").checked) {
      possibleChars += "0123456789";
    }
    if (document.getElementById("include-symbols").checked) {
      possibleChars += possibleSymbols;
    }
    
    // Generate the password
    for (var i = 0; i < length; i++) {
      password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    
    // Display the password
    document.getElementById("password").value = password;
    event.preventDefault();
  }
  
  function updateLength(value) {
    document.getElementById("length-display").innerHTML = value;
  }