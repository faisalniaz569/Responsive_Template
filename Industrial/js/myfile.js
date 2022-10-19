var document, $;

// responsivemenu

function myFunction() {
    "use strict";
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    "use strict";

    // menu bar icons
    $(".fa-bars").click(function () {
        $(".fa-bars").hide();
        $(".fa-times").show();
    });

    // menu times icons
    $(".fa-times").click(function () {
        $(".fa-bars").show();
        $(".fa-times").hide();
    });
});


