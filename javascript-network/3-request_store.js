const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];
const content = "C is fun!";

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fs.writeFile(filePath, content, { encoding: "utf-8" }, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log(content);
      }
    });
  } else {
    console.error("Error:", error);
  }
});
