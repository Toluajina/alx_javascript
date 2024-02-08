const request = require("request");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];
const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum sapien nec odio eleifend placerat. Maecenas a vehicula libero. Nullam lobortis tristique neque, id cursus ex porttitor eu. Nulla facilisi. Cras volutpat velit elit, bibendum pretium libero sagittis sed. Morbi eget augue pretium, porttitor orci varius, tincidunt arcu. Duis at magna nec augue lobortis hendrerit. Aliquam non augue semper, sollicitudin nulla ut, vehicula neque. Cras nec nunc sodales, efficitur purus in, elementum urna. Cras sed aliquet erat, nec facilisis dui.\n\nInteger vestibulum ultricies nibh. Cras consectetur dapibus lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a eleifend sapien. Proin in massa at odio pellentesque ullamcorper. Etiam bibendum vehicula lacus, vel tincidunt sem scelerisque in. Etiam maximus orci sit amet velit facilisis, et gravida nisl tempus. Pellentesque volutpat auctor elit, nec mollis arcu vehicula sed. Etiam rhoncus odio sit amet condime...";

fs.writeFile(filePath, content, { encoding: "utf-8" }, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log(content);
  }
});
