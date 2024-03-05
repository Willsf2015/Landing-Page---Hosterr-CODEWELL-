let button = document.querySelector(".button");
let buttonClose = document.querySelector(".button-close");
let mobileMenu = document.querySelector(".mobile-menu");

function menuShow() {
  mobileMenu.style.display = "block";
  buttonClose.style.display = "block";
  button.style.display = "none";
}

function menuClose() {
  mobileMenu.style.display = "none";
  buttonClose.style.display = "none";
  button.style.display = "block";
}
