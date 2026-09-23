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

function displayRow(){
    let tableBody = document.getElementById("tablePets");
    tableBody.innerHTML = ``;

    let pets = [pet1, pet2, pet3, pet4, pet5, pet6]; 

    for(let i = 0; i < pets.length; i++){
        tableBody.innerHTML += `
        
        <tr>
            <td>${pets[i].name}</td>
            <td>${pets[i].age}</td>
            <td>${pets[i].gender}</td>
            <td>${pets[i].service}</td>
            <td>${pets[i].breed}</td>
        </tr>    
        `;
    }
}

displayRow();
