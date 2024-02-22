// Retrieve the form element and input container element
const dynamicForm = document.getElementById("dynamicForm");
const inputContainer = document.getElementById("inputContainer");

// Add event listener to the form submit event
dynamicForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the validateForm function to validate the form
  const isValid = validateForm();

  // If form is valid, submit the form
  if (isValid) {
    dynamicForm.submit();
  } else {
    // If form is not valid, display error message
    alert("Please fill in all fields.");
  }
});

// Add event listener to the change event of the numFields select element
const numFieldsSelect = document.getElementById("numFields");
numFieldsSelect.addEventListener("change", function (event) {
  // Retrieve the selected value from the dropdown menu
  const numFields = parseInt(numFieldsSelect.value);

  // Call the generateInputFields function to generate input fields dynamically
  generateInputFields(numFields);
});

// Function to generate input fields dynamically based on selected value
function generateInputFields(numFields) {
  // Clear previous input fields
  inputContainer.innerHTML = "";

  // Generate specified number of text input fields
  for (let i = 1; i <= numFields; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = `field${i}`;
    inputContainer.appendChild(inputField);
  }
}

// Function to validate the form
function validateForm() {
  // Retrieve all input fields within the input container
  const inputFields = inputContainer.querySelectorAll("input");

  // Check if any field is empty
  for (let i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].value.trim()) {
      return false; // If any field is empty, return false
    }
  }
  return true; // If all fields are filled, return true
}

// Initial generation of input fields based on the default selected value
generateInputFields(parseInt(numFieldsSelect.value));
