let transMenu = document.querySelector('.menu');
let closeMenu = document.querySelector('.closeMenu');
transMenu.addEventListener("click", () => {
  document.querySelector(".menuTab").classList.add("active");
  closeMenu.addEventListener("click", () => {
    document.querySelector(".menuTab").classList.remove("active");
  });
});
let mood = document.querySelector(".mood");
if (mood) {
  mood.addEventListener("click", () => {
    mood.classList.toggle("fa-moon");
    document.querySelector("body").classList.toggle("light");
  });
}
