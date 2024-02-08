// Main code
function outer() {
  alert(globalVariable); // Alerts "Welcome"
  var course = "Holberton";

  function inner() {
    alert(globalVariable + " " + course); // Alerts "Welcome Holberton"
    var exclamation = "!";

    function inception() {
      alert(globalVariable + " " + course + exclamation); // Alerts "Welcome Holberton!"
    }

    inception();
  }

  inner();
}

var globalVariable = "Welcome";
outer();
