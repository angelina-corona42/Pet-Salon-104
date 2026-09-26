$("#changeMode").click(function(){

    // Change Mode
    $("body").toggleClass("dark-mode");

    // Is the class applied?
    const isDark = $("body").hasClass("dark-mode");

    $("#changeMode").text(isDark ? "🌓" : "☀️");

});