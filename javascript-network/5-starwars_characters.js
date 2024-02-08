const request = require("request");

const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movie = JSON.parse(body);
    console.log("Characters in", movie.title + ":");
    movie.characters.forEach((characterUrl) => {
      request(characterUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const character = JSON.parse(body);
          console.log(character.name);
        } else {
          console.error("Error fetching character:", error);
        }
      });
    });
  } else {
    console.error("Error fetching movie:", error);
  }
});
