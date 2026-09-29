// Save 
$("#saveBtn").click(function(){
    let usernameValue = $("#username").val().trim();

    // 2. Use the value 
    //                        key           value   
    localStorage.setItem("usernameKey", usernameValue)
});

// Get
$("#getBtn").click(function(e){
    e.preventDefault();

    let storedUsername = localStorage.getItem("usernameKey");

    $("#result").text(storedUsername ? storedUsername: "No data found");
});

// Delete
$("#deleteBtn").click(function(){
    
    
    localStorage.clear();
       
});
