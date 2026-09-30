// Save 
$("#saveBtn").click(function(){
    let usernameValue = $("#username").val().trim();
    let nameValue = $("#name").val().trim();
    let ageValue = $("#age").val().trim();
    let emailValue = $("#email").val().trim();

    // 2. Use the value 
    //                        key           value  
    let savedFlag = true; 
    if (usernameValue ==""){
        savedFlag = false;
    }

    if(nameValue == ""){
        savedFlag = false;
    }

    if(ageValue == ""){
        savedFlag = false;
    }

    if(emailValue == ""){
        savedFlag = false;
    }

    if (savedFlag == true){
        localStorage.setItem("UserName", usernameValue);
        localStorage.setItem("Name", nameValue);
        localStorage.setItem("Age", ageValue);
        localStorage.setItem("Email", emailValue);
        alert("Data was saved to local storage.");
    } else {
        alert("Please complete the form.");
    }
 
});

// Get
$("#getBtn").click(function(e){
    e.preventDefault();

    let storedUsername = localStorage.getItem("usernameKey");
    let storedName = localStorage.getItem("nameKey");
    let storedAge = localStorage.getItem("ageKey");
    let storedEmail = localStorage.getItem("emailKey");

    $("#result").text(storedUsername ? storedUsername:"No data found");

    $("#name").text(storedName ? storedName:"No data found");

    $("#age").text(storedAge ? storedAge:"No data found");

    $("#email").text(storedEmail ? storedEmail:"No data found");
   
});

// Delete
$("#deleteBtn").click(function(){
    //localStorage.removeItem("usernameKey")
    localStorage.clear();
       
});


