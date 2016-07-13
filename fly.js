
// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

//Variables
var windowHeight=$(window).height(),
    windowWidth=$(window).width(),
    click = 0,
    timeLeft = 30,
    elem = document.getElementById("countDown"),
    timerId = setInterval(countdown, 1000);

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

// Click counter
function onClick() {
    click += 1;
    document.getElementById("counter").innerHTML = click;
    document.getElementById("counter2").innerHTML = click;
}

// 30 Sec Timer
function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

// Game
function start() {
    document.getElementById("startButton").style.visibility="hidden";
    document.getElementById("box").style.visibility="visible";
    document.getElementById("fly").style.visibility="visible";
    document.getElementById("hideEnd").style.display="block";

    myVar = setTimeout(timer, 30000);
    function timer() {
        document.getElementById("over").style.visibility="visible";
        document.getElementById("fly").style.visibility="hidden";
        document.getElementById("hideEnd").style.display="none";
    }
}
