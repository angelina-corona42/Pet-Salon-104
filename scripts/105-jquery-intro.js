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

