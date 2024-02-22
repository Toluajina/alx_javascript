// Retrieve the form element and error message element
const passwordForm = document.getElementById("passwordForm");
const errorElement = document.getElementById("error");

// Add event listener to the form submit event
passwordForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the value entered in the password input field
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;

  // Call the validatePassword function to check password strength
  const isValid = validatePassword(password);

  // If password is valid, allow form submission
  if (isValid) {
    errorElement.textContent = ""; // Clear any previous error message
    passwordForm.submit(); // Submit the form
  } else {
    // If password is not valid, display error message
    errorElement.textContent =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
  }
});

// Function to validate password strength
function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
