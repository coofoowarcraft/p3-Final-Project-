/**
Jeff Palmer
Project 2
**/
var globaluser;
var globalpass;
var boolu = false;
var boolp = false;
var boolm = false;
var masterlist = "";

function eraseUsers() {
  setCookie("masterlist", "", 0);
  setCookie("user", "", 0);
}

// Used from lab 27.
function loadAllUsers() {
  var savedCookie = getCookie("masterlist");
  if (savedCookie != "") {
    var arrayCookie = savedCookie.split(' ');
    for (var i = 0; i < arrayCookie.length; i++) {
      console.log(arrayCookie[i]);
    }
  }
}

function goBack() {
  window.location = 'MainPage.html';
}

function finalCheckout() {
  var info = getCookie("user");
  window.alert("Your Information: " + info);
}

function checkOut() {
  if (boolm == true) {
  window.location = 'checkout.html';
  finalCheckout();
  } else {
    window.alert("Your dollar amount is not valid");
  }
}

function moon() {
  window.location = 'moon.html';
}

function mars() {
  window.location = 'mars.html';
}

function jupiter() {
  window.location = 'jupiter.html';
}

function Register() {
  //if both username and password are correctly inputed it will let the user continue.
  if (boolu == true && boolp == true) {
    var string = "User: " + globaluser + " Pass: " + globalpass;
    masterlist += string;
    setCookie("masterlist", masterlist, 1);
    setCookie("user", string, 1);
  //condition allows the next page to be true.
    window.location = 'MainPage.html';
  }
}

//used from lab 15 and modified to work properly with project.
function validateMoney() {
  var money = document.getElementById("money").value;
  //  The amount must be at least 7 digits long
  if (money.length < 7) {
    document.getElementById("moneyGroup").classList.remove("has-success");
    document.getElementById("moneyGroup").classList.add("has-error");
    document.getElementById("moneyError").innerHTML="Amount must contain at least 7 digits..";
    document.getElementById("moneyError").classList.remove("hidden-message");
    document.getElementById("moneyError").classList.add("shown-message");
    boolm = false;
  }
  // Amount must NOT contain any spaces
  else if (!(/^\S{3,}$/.test(money))) {
    document.getElementById("moneyGroup").classList.remove("has-success");
    document.getElementById("moneyGroup").classList.add("has-error");
    document.getElementById("moneyError").innerHTML="Amount must not contain spaces.";
    document.getElementById("moneyError").classList.remove("hidden-message");
    document.getElementById("moneyError").classList.add("shown-message");
    boolm = false;
  }
  // Amount must be a number
  else if (isNaN(money)) {
    document.getElementById("moneyGroup").classList.remove("has-success");
    document.getElementById("moneyGroup").classList.add("has-error");
    document.getElementById("moneyError").innerHTML="Amount must be numbers.";
    document.getElementById("moneyError").classList.remove("hidden-message");
    document.getElementById("moneyError").classList.add("shown-message");
  }
  else {
  // green
    document.getElementById("moneyGroup").classList.remove("has-error");
    document.getElementById("moneyGroup").classList.add("has-success");
    document.getElementById("moneyError").innerHTML="Cleared for Checkout!";
    boolm = true;
    var string = getCookie("user");
    string += ", Amount paid: " + money;
    setCookie("user", string, 1 );
  }
}

//used from lab 15 and modified to work properly with project.
function validateUsername(user) {
  userEntered = user.value;
  globaluser = userEntered;
  //  The username must be at least 6 characters long
  if (userEntered.length < 6) {
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameError").innerHTML="Username must contain at least 6 letters..";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    boolu = false;
  }
  // Username must NOT contain any spaces
  else if (!(/^\S{3,}$/.test(userEntered))) {
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameError").innerHTML="Username must not contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    boolu = false;
  }
  else {
  // green
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
    boolu = true;
  }
}

//used from lab 15 and modified to work properly with project.
function validatePassword(pass) {
  passEntered = pass.value
  globalpass = passEntered;
  // Password must NOT be the same as the Username
  if (passEntered == globaluser) {
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordError").innerHTML="You cannot have a password the same as a username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    boolp = false;
  }

  // Password must be between 6-20 characters
  else if (passEntered.length < 6 || passEntered.length > 20) {
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordError").innerHTML="Your password length is invalid. Please choose a password between 6 and 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    boolp = false;
  }

  // Password must NOT be the word "password" regardless of (upper-/lower-) case used
  else if (passEntered.toLowerCase() == "password") {
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordError").innerHTML="Password cannot contain any combination of Upper/Lower containing the word password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    boolp = false;
  }
  else {
  // green
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
    boolp = true;
  }
}

  //courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  //courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
