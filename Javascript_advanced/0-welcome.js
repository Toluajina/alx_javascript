function welcome(firstName, lastName) {
  const fullName = firstName + " " + lastName;

  function displayFullName() {
    alert("Welcome " + fullName + "!");
  }

  displayFullName();
}

// Example usage:
welcome("John", "Doe");
