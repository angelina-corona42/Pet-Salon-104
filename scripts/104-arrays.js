// 1. Define the array
let nameList = ["Ashlie", "Leticia", "Claudia", "Amelia"];

// 2. Accesing to an item --> index
nameList[0]; // Ashlie 

//Display the first name
console.log(nameList[0]);

//Display the third name
console.log(nameList[2]); // Claudia 

// 3. Update an item (change a name)
nameList[0] = "Angelina Corona";
console.log(nameList[0]);

// 4. Travel the array (for loop)
for (let i=0; i< nameList.length; i++){
    console.log(nameList[i]);
}

// ------- Array of Objects ------- 

let studentList = [

    {
        name: "Ashlie", 
        lastName: "Rodriguez", 
        age: 28, 
        isStudent: true
    }, 

    {
        name: "Leticia", 
        lastName: "Cisneros",
        age: 29, 
        isStudent: false
    },

    {
        name: "Claudia", 
        lastName: "Lopez",
        age: 54, 
        isStudent: false
    }

];

console.log(studentList);

// Display values in the console

// First Student Name 
studentList[0].name;
console.log(studentList[0].name);

//Third Student Last Name 
studentList[2].lastName;
console.log(studentList[2].lastName);

// Second Student Age
studentList[1].age;
console.log(studentList[1].age);

// Print this with the first student's information 
// Hey, this is ____ and I am ____ years old. 

console.log(`Hey, this is ${studentList[0].name} and I am ${studentList[0].age}`);


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



