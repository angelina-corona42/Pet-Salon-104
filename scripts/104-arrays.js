// ==== EXERCISE ====
// Create an array called gamesList with 3 game objects.
// Each object should have title, platform, and release year.
// Print the first game's title.
// Print the second game's platform. //switch, PC, etc.
// Print the third game's title, platform, and release year in single sentence.
// Print the total number of games.

const gamesList = [
    {
        title: "Super Mario Bros Wii",
        platform: "Nintendo",
        releaseYear: 2009
    },
    {
        title: "Sims",
        platform: "PC",
        releaseYear: 2004
    },
    {
        title: "Animal Crossing",
        platform: "Nintendo Switch",
        releaseYear: 2020
    }
]
console.log(gamesList[0].title);
console.log(gamesList[1].platform);
console.log(`${gamesList[2].title} is on ${gamesList[2].platform} and was released in ${gamesList[2].releaseYear}.`);



