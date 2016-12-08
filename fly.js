// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

//Variables
var windowHeight = $(window).height(),
    windowWidth = $(window).width(),
    click = 0,
    timeLeft = 30,
    timerId = setInterval(countdown, 1000),
    elem = document.getElementById("countDown"),
    fly = document.getElementById("fly"),
    hideEnd = document.getElementById("hideEnd");

// Start Game
function start() {
    document.getElementById("startButton").style.visibility = "hidden";
    document.getElementById("box").style.visibility = "visible";
    fly.style.visibility = "visible";
    hideEnd.style.display = "block";

    // End Game
    myVar = setTimeout(timer, 30000);
    function timer() {
        document.getElementById("over").style.visibility = "visible";
        fly.style.visibility = "hidden";
        hideEnd.style.display = "none";
    } // end timer
} // end start

// 30 Sec Timer
function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
} // end countdown

// Click counter
function onClick() {
    click += 1;
    var counter = $('#counter'),
        counter2 = $('#counter2');
    // Displayed Counter
    counter.html(click);
    // End Game Click Status
    counter2.html(click);
}

// Window height
$(document).ready(function(){
    $(window).height(windowHeight+"px");
    //alert(windowWidth);
});

//Body Not Selectable
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
};
