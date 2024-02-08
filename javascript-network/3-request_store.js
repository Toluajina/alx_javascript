const fs = require("fs");

const filePath = process.argv[2];
const content = "C is fun!";

fs.writeFile(filePath, content, { encoding: "utf-8" }, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log(content);
  }
});
