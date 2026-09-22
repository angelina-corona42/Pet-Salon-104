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