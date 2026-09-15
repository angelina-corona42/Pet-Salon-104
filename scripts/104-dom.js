function update(){
    //Testing button and function connection
    //alert("Clicked!");

    //1. Update H1 Text
    let title = document.getElementById("title");

    //Update the text there are two ways
    //TextContent or InnerHTML
    title.textContent = "Hello Class!";

    
    // 2. Update the paragraphs
    let paragraphs = document.getElementsByClassName("text");
    //console.log(paragraphs); this will return an array

    //Access to p1 and update the text color 
    // ASK GOOGLE : JS chante text color
    paragraphs[0].style.color = "red";
    paragraphs[1].style.color = "green";
}

function add(){
    // 1. Get the input value
    let value = document.getElementById("inputField").value;
    // This will give what is inside the box
    // alert(value);

    // 2. Display value in the list 
    let list = document.getElementById("list");

    let listItem = document.createElement("li");
    listItem.innerHTML = value;

    list.appendChild(listItem);

    //ASK GOOGLE: JS clear input field 
    document.getElementById("inputField").value="";

}