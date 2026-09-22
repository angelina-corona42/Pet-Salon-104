$("#registerBtn").click(function(event){
    event.preventDefault();
    //1. Get the values
    let service = $("#serviceName").val().trim();
    let description = $("#serviceDescription").val().trim();
    let price = $("#servicePrice").val().trim();

    // alert(` ${service} - ${description} - ${price}`);

    //2. Use the values
    if(service===""){
        //Change Border
        $("#serviceName").css("border", "solid 2px red");
    }else{
        // Assignment 3 (Save it in local storage)
    }
});


