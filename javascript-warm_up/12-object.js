const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];

for (let i = 0; i < lines.length; i++) {
  console.log(lines[i]);
}

// Replace the value 12 with 89
lines[1] = "Python is 89";

// Print the updated array
for (let i = 0; i < lines.length; i++) {
  console.log(lines[i]);
}
