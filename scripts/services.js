function Service(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
}

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

    // 3. Register only if everything is filled in
    if(hasError === false){

        // Create Service object
        let newService = new Service(
            service,
            description,
            price
        );

        // Save to local storage
        localStorage.setItem("ServiceName", service);
        localStorage.setItem("ServiceDescription", description);
        localStorage.setItem("ServicePrice", price);

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

$("#changeMode").click(function(){

    // Change Mode
    $("body").toggleClass("dark-mode");

    // Is the class applied?
    const isDark = $("body").hasClass("dark-mode");

    $("#changeMode").text(isDark ? "🌓" : "☀️");

});