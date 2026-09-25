// Javascript --> Vanilla
function sayHello(){
    alert("Hello");
}


// jQuery Approach 
// Selector              .Action
$("#triggerEventButton").click(function(){
    alert("Hello, Angie!");
});

// === Practicing jQuery Actions === //

// -- .hide ---
$("#hideParagraph").click(function(){
    $("p").hide();
});

// --- .show ---
$("#showParagraph").click(function(){
    $("p").show();
});

// --- .toggle or .slideToggle ---
$("#toggleParagraph").click(function(){
    $("p").toggle();
});

// ---- Change Text ----
// text / html --> jQuery
// textContent / innerHTML --> JS
$("#changeText").click(function(){
    $("p").html("<i>Hello Class</i>");
});

// --- CSS jQuery -----

// Apply CSS 
$("#applyCSS").click(function(){
    $("p")
    .css("color", "white")
    .css ("padding", "20px")
    .css ("border", "solid 2px red");
});

// Apply class
$("#applyClass").click(function(){
    $("p").addClass("text-style");
});

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