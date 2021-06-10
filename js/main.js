var finishDay = 18 * (1000 * 60 * 60 * 24);
var finishHour = 18 * (1000 * 60 * 60);
var finishMin = 18 * (1000 * 60);
var finishSec = 18 * 1000;
var finish = finishDay + finishHour + finishMin + finishSec;

var targetDay = new Date().getTime() + finish;

var timer = setInterval(function() {
    let now = new Date().getTime();
    let t = targetDay - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days;
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2);
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2);
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2);
    
    }
    
}, 1000);

var menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', function () {
    console.log("click");
    document.querySelector('.navbar-menu__wrapper').classList.toggle('visible');
});