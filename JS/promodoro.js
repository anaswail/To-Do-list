// call active functions 
let startMin = document.querySelector('.startMin');
let pauseMin = document.querySelector('.pauseMin');
let resetMin = document.querySelector('.resetMin');

// call break functions 
let startSec = document.querySelector('.startSec');
let pauseSec = document.querySelector('.pauseSec');
let resetSec = document.querySelector('.resetSec');

// variables active
let min = 25;
let sec = 0;

// active onclick 
startMin.addEventListener('click', ()=>{
    if(min > 0){
        if(sec > 0){
            sec--;
            if(sec < 10){
                document.querySelector('.timeSecActive').innerText ='0' + sec;
            }
            else{
                document.querySelector('.timeSecActive').innerText = sec;
            }
        }
        else if(sec == 0){
            sec = 59;
            min--;
        }
        document.querySelector('.timeMinutActive;').innerText = min;
    }
    else{
        min = 25;
        document.querySelector('.timeMinutActive;').innerText = min;
        sec = 0;
    } 
})
