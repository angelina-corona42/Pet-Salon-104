$("#registerBtn").click(function(event){
    event.preventDefault();

    // 1. Get the values
    let service = $("#serviceName").val().trim();
    let description = $("#serviceDescription").val().trim();
    let price = $("#servicePrice").val().trim();

    // Reset borders before checking again
    $("#serviceName").css("border", "");
    $("#serviceDescription").css("border", "");
    $("#servicePrice").css("border", "");

    let hasError = false;

    // 2. Validate the values
    if(service === ""){
        $("#serviceName").css("border", "solid 2px red");
        hasError = true;
    }

    if(description === ""){
        $("#serviceDescription").css("border", "solid 2px red");
        hasError = true;
    }

    if(price === ""){
        $("#servicePrice").css("border", "solid 2px red");
        hasError = true;
    }

    // 3. Register service only if everything is filled in
    if(hasError === false){

        let newService = new Service(
            service,
            description,
            price
        );

        // Clear the form
        $("#serviceName").val("");
        $("#serviceDescription").val("");
        $("#servicePrice").val("");

        // Remove red borders
        $("#serviceName").css("border", "");
        $("#serviceDescription").css("border", "");
        $("#servicePrice").css("border", "");
    }

});

$("#resetBtn").click(function(){

    $("#serviceName").css("border", "");
    $("#serviceDescription").css("border", "");
    $("#servicePrice").css("border", "");

});