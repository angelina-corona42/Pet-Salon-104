let salon = {
    name: "Fluff & Buff", 
    address: "1145 Linda Vista Dr., San Marcos, CA 92078", 
    hours: "10:00am to 6:00pm", 
    phone: "(555)555-555"
};

function displaySalonInfo(){
    let p = document.getElementById("infoParagraph");

    p.innerHTML = "Welcome to " + salon.name +"! We are located at " + salon.address + ". Our hours are " + salon.hours + ". You can contact us at " + salon.phone; 
}
displaySalonInfo();









