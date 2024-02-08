const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fs.writeFile(filePath, body, { encoding: "utf-8" }, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("File written successfully.");
      }
    });
  } else {
    console.error("Error:", error);
  }
});
