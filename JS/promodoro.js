// call active elements
let activeMin = document.querySelector('.activeMin');
let activeSec = document.querySelector('.activeSec');

// call active btns 
const startActive = document.querySelector('.startActive');
const pauseActive = document.querySelector('.pauseActive');
const resetActive = document.querySelector('.resetActive');

// call break elements
let breakMin = document.querySelector('.breakMin');
let breakSec = document.querySelector('.breakSec');


var startTimer;
startActive.addEventListener("click",()=>{
    if(startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    }
    else{
        alert('timer already Start')
    }
})
pauseActive.addEventListener("click", ()=>{
    clearInterval(startTimer);
    startTimer = undefined;
})
resetActive.addEventListener("click", ()=>{
    clearInterval(startTimer);
    startTimer = undefined;
    activeMin.innerText = 25;
    activeSec.innerText = "00"

    breakMin.innerText = 5;
    breakSec.innerText = "00";

    document.querySelector('.count').innerText = 0;
})
function timer () {
    // start active CountDown
    if(activeSec.innerText != 0) {
        activeSec.innerText--;
    }
    else if(activeSec.innerText == 0 && activeMin.innerText != 0) {
        activeSec.innerText = 59;
        activeMin.innerText--;
    }

    // Start break CountDown
    if(activeMin.innerText == 0 && activeSec.innerText == 0) {
        if(breakSec.innerText != 0) {
            breakSec.innerText--;
        }
        else if(breakSec.innerText == 0 && breakMin.innerText != 0) {
            breakSec.innerText = 59;
            breakMin.innerText--;
        }
    }

    // start counter 
    if(activeMin.innerText == 0 && activeSec.innerText == 0 && breakMin.innerText == 0 && breakSec.innerText == 0){
        
        document.getElementById('rangeBell').play();
        activeMin.innerText = 25;
        activeSec.innerText = "00";
        
        breakMin.innerText = 5;
        breakSec.innerText = "00";
        document.querySelector('.count').innerText++;

    }

}