let pet1 = {
    name: "Koda", 
    age: 4, 
    gender: "Male", 
    service: "Basic Bath", 
    breed: "German Husky Mix"
};
let pet2 = {
    name: "Kenai", 
    age: 4, 
    gender: "Male", 
    service: "Deluxe Groom", 
    breed: "Labrador Husky Mix"
};
let pet3 = {
    name: "Remy", 
    age: 1, 
    gender: "Male", 
    service: "Premium Pamper", 
    breed: "Orange Tabby"
};

function displayPets(){
    let petList = document.getElementById("petList");
    petList.innerHTML = ``;

    petList.innerHTML += `<li>${pet1.name}</li> <li>${pet2.name}</li> <li>${pet3.name}</li>`;
}

displayPets();

function Pet(name, age, gender, service, breed){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.service = service;
    this.breed = breed;
}

let pet4 = new Pet("Olive", 10, "Female", "Paw Trim / Bath", "Golden Retriever");
console.log(pet4);

let pet5 = new Pet("Jackson", 2, "Male", "Basic Bath", "Boxer Mix");
console.log(pet5);

let pet6 = new Pet("Bently", 6, "Male", "Haircut & Premium Bath", "Wolf Dog Mix");
console.log(pet6);
