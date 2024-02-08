const request = require("request");
const fs = require("fs");

const url = process.argv[2];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fs.writeFile("file_0", body, { encoding: "utf-8" }, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("File written successfully.");
        console.log(body);
      }
    });
  } else {
    console.error("Error:", error);
  }
});
