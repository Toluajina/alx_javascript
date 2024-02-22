// Retrieve the form element and error message element
const emailForm = document.getElementById("emailForm");
const errorElement = document.getElementById("error");

// Add event listener to the form submit event
emailForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the value entered in the email input field
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // Call the validateEmail function to check email format
  const isValid = validateEmail(email);

  // If email format is valid, allow form submission
  if (isValid) {
    errorElement.textContent = ""; // Clear any previous error message
    emailForm.submit(); // Submit the form
  } else {
    // If email format is not valid, display error message
    errorElement.textContent = "Please enter a valid email address.";
  }
});

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
