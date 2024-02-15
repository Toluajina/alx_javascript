JS HTML DOM manipulation

Requirements
General
Recommended editors: Visual studio code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
You are not allowed to use var

TASKS

1. Play with the DOM: Write a JavaScript program that demonstrates the basic concept of the DOM by accessing and modifying an HTML element.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

<!DOCTYPE html>
<html>
<head>
  <title>DOM Introduction</title>
</head>
<body>
  <p id="myParagraph">This is a paragraph.</p>
</body>
</html>
Write JavaScript code to select the element using its id and store it in a variable
Use the DOM API to modify the content of the <p> element to I successfully updated this paragraph with javascript
Make use of document.getElementById
Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

2. Selecting HTML Elements Using Selectors: Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

<!DOCTYPE html>
<html>
<head>
  <title>Selecting Elements</title>
  <style>
    .highlight {
      color: red;
    }
  </style>
</head>
<body>
  <p class="highlight">This is a highlighted paragraph.</p>
  <p>This is a normal paragraph.</p>
</body>
</html>
Use the DOM API to modify the format of the <p class="highlight"> element to make the content boldened
Make use of document.querySelectorAll
Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

3. Modifying Element Content, Attributes, and Styles: Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

<!DOCTYPE html>
<html>
<head>
  <title>Modifying Elements</title>
  <style>
    img {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <img id="myImage" src="https://picsum.photos/200/300" alt="My Image">
</body>
</html>
Write JavaScript code to select the <img> element using its id and store it in a variable.
Use the DOM API to modify the following:
the src to https://picsum.photos/200/301,
the alt to New image
the border style to 2px solid red
Make use of document.getElementById
Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

4. Creating, Appending, and Removing Elements: Write a JavaScript program that demonstrates the creation, appending, and removal of elements using the DOM.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

<!DOCTYPE html>
<html>
<head>
  <title>Creating and Removing Elements</title>
</head>
<body>
  <div id="container"></div>
</body>
</html>
Write JavaScript code to select the container element using its id and store it in a variable.
Use the DOM API to create a new <p> element, and add New paragraph as its content
Append the newly created elements to the container element.
Add a button that removes/hides the newly created paragraph when first click and shows it when clicked again
Verify that the program successfully creates, appends, and toggles elements when the HTML file is opened in a browser.
