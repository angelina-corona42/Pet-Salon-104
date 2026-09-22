// Primitive / Basic 
let name = "Angelina";
let lastname = "Corna";
let age = 25;
let isStudent = false;

let name1 = "Leticia";
let lastname1 = "Cisneros";
let age1 = "29";
let isStudent1 = true; 

//Non-Primative / Advance
//OBJECT LITERAL
// student1 = object , name = property 
let student1 = {
    name:"Angelina", 
    lastname: "Corona", 
    age: 25, 
    isStudent: false
};

let student2 = {
    name:"Ashlie", 
    lastname: "Rodriguez", 
    age: 27, 
    isStudent: false
};

// Access to the values --> 
// objectName.property
// Student 1 name 
console.log (student1.name);

// Student 2 age
console.log(student2.age);

// Student 1 lastname
console.log(student1.lastname);

// Student 2 is Student?
console.log(student2.isStudent);

// INTERPILATION
// Hello, my name is _______, and I am ______ years old
console.log(`Hello, my name is ${student1}`);

// Display the interpoliation sentence in the paragraph 
let p = document.getElementById("paragraph");

p.innerHTML = `Hello, my name is ${student1.name}, and I am ${student1.age} years old.`;

/*Exercise 1 - Product Objects

Create 3 different object literals to represent products. 

Each object should have the same properties (at least 4). 

User interpolation to display the information of each product. Use different sentences for each product.
*/

let product1 = {
    name: "Monitor",
    brand: "Dell", 
    price: 96.99, 
    inStock: true
};
let product2 = {
    name: "Keyboard",
    brand: "LogiTech", 
    price: 104.99, 
    inStock: true
};
let product3 = {
    name: "Mouse",
    brand: "Apple", 
    price: 75.99, 
    inStock: false
};

console.log(`I just bought a new ${product1.brand} ${product1.name} for ${product1.price}`); 

// ==== OBJECT CONSTRUCTOR ====
function Student(name, lastname, age, isStudent){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.isStudent = isStudent; 
}

let student = new Student("Angelina", "Corona", 25, true);
console.log(student);