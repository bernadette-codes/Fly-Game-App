// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

//Variables
var windowHeight = $(window).height(),
    windowWidth = $(window).width(),
    navHeight = $("nav").height(),
    headerHeight = $("header").height(),
    footerHeight = $("footer").height(),
    $box = $("#box"),
    click = 0,
    timeLeft = 30,
    timerId = setInterval(countdown, 1000),
    $elem = document.getElementById("countDown"),
    $fly = document.getElementById("fly"),
    $hideEnd = document.getElementById("hideEnd");

// Start Game
function start() {
    document.getElementById("startButton").style.visibility = "hidden";
    document.getElementById("box").style.visibility = "visible";
    $fly.style.visibility = "visible";
    $hideEnd.style.display = "block";

    // End Game
    myVar = setTimeout(timer, 30000);
    function timer() {
        document.getElementById("over").style.visibility = "visible";
        $fly.style.visibility = "hidden";
        $hideEnd.style.display = "none";
    } // end timer
} // end start

// Click counter
function onClick() {
    click += 1;
    var $counter = $('#counter'),
        $counter2 = $('#counter2');
    // Displayed Counter
    $counter.html(click);
    // End Game Click Status
    $counter2.html(click);
}

// 30 Sec Timer
function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
    } else {
        $elem.innerHTML = timeLeft;
        timeLeft--;
    }
} // end countdown

$(document).ready(function(){
    //alert(windowWidth);

    // Fly Area
    $box.css("height",(windowHeight - navHeight - headerHeight - footerHeight));
    // Warning for Too Small Screen
    if(windowHeight <= 450) {
        $("header, main").css("visibility", "hidden");
        $(".fail").css("visibility", "visible");
    }

    // Fly Area on Resize
    $(window).on("resize", function() {
        var windowHeight = $(window).height(),
            navHeight = $("nav").height(),
            headerHeight = $("header").height(),
            footerHeight = $("footer").height();
        // Fly Area
        $box.css("height",(windowHeight - navHeight - headerHeight - footerHeight));
        // Warning for Too Small Screen
        if(windowHeight <= 450) {
            $("header, main").css("visibility", "hidden");
            $(".fail").css("visibility", "visible");
        } else {
            $("header, main").css("visibility", "visible");
            $(".fail").css("visibility", "hidden");
        }
    });
});

//Body Not Selectable
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
};
