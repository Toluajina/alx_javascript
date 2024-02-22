HTML Form + JS validation

Requirements

General
Recommended editors: Visual studio code
All your files should end with a new line
A README.md file, at the root of the folder of the project is mandatory
You are not allowed to install, import or use external libraries. This website must be build with only HTML/CSS/JavaScript. No NodeJS, React, VueJS, Bootstrap, etc.
Your code should be W3C compliant and validate with W3C-Validator

TASKS

Form Validation - Password Strength: Below is the content of password.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="passwordForm">
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <button type="submit">Submit</button>
  <p id="error" style="color: red;"></p>
</form>
</body>
</html>
Implement JavaScript validation to check the password strength when the form is submitted.
Retrieve the value entered in the password input field using JavaScript.
Your JavaScript should be written in a separate file and used as an external script in the HTML code

Write a function called validatePassword to validate the password based on the provided criteria.

The validatePassword function should check the following criteria:

The password must be at least 8 characters long.

The password must contain at least one uppercase letter.

The password must contain at least one lowercase letter.

The password must contain at least one numeric digit.

The password must contain at least one special character (e.g., !@#$%^&\*).

If the password meets all the criteria, allow the form submission.

If the password does not meet the criteria, display an appropriate error message in the <p> element with the id “error” .
