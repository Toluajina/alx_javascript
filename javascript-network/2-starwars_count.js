const request = require("request");

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const filmsData = JSON.parse(body).results;
    let count = 0;
    filmsData.forEach((film) => {
      if (
        film.characters.includes(
          `https://swapi-api.alx-tools.com/api/people/${characterId}/`
        )
      ) {
        count++;
      }
    });
    console.log(count);
  } else {
    console.log("Error:", error);
  }
});
