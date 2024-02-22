// Retrieve the form element
const submitForm = document.getElementById("submitForm");

// Add event listener to the form submit event
submitForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the handleFormSubmit function to handle form submission
  handleFormSubmit();
});

// Function to handle form submission and perform validation
function handleFormSubmit() {
  // Retrieve the values entered in the form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Check if the required fields are filled
  if (!name || !email) {
    // If any required field is empty, display error message
    alert("Please fill in all required fields.");
    return; // Stop further execution
  }

  // Display success message if all validations pass
  alert("Form submitted successfully!");
}
