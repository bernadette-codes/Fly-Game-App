/**
 * Created by Bernadette on 2/8/2016.
 */

// Copyright Year
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;

//Window height
$(document).ready(function(){
    var windowHeight=$(window).height();
    $(window).height(windowHeight+"px");

    var windowWidth=$(window).width();
    //alert(windowWidth);
});

// Click counter
var click = 0;
function onClick() {
    click += 1;
    document.getElementById("counter").innerHTML = click;
    document.getElementById("counter2").innerHTML = click;
}

// 30 Sec Timer
var timeLeft = 30;
var elem = document.getElementById("countDown");

var timerId = setInterval(countdown, 1000);

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

    myVar = setTimeout(timer, 30000)
    function timer() {
        document.getElementById("over").style.visibility="visible";
        document.getElementById("fly").style.visibility="hidden";
        document.getElementById("hideEnd").style.display="none";
    }
}
