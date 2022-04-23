
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "Manasi" && password == "manasi29") {
    alert("Login successful");
     return false;
  }
  else {
    alert("Login Failed!");
  }
}