function showDate() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var timeOfDay = "AM";
    if (hours > 12) {
        hours = hours - 12;
        timeOfDay = "PM";
    }
    else if(hours < 10){
        hours = "0" + hours;
    }
    else if(hours < 12) {
        timeOfDay = "AM"
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    let time = hours + " : " + minutes + " : " + seconds + "   [ " +timeOfDay + " ]";
    document.querySelector('.time').innerHTML = time;
}
setInterval(showDate, 1000);
showDate();
let transMenu = document.querySelector('.menu');
let closeMenu = document.querySelector('.closeMenu');

transMenu.addEventListener("click", ()=>{
  document.querySelector('.menuTab').classList.add('active');
  closeMenu.addEventListener("click", ()=>{
    document.querySelector('.menuTab').classList.remove('active');
  })
})
let mood = document.querySelector(".mood");
if (mood) {
  mood.addEventListener("click", () => {
    mood.classList.toggle("fa-moon");
    document.querySelector("body").classList.toggle("light");
  });
}