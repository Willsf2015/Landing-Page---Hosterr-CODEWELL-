let button = document.querySelector(".button");
let buttonClose = document.querySelector(".button-close");
let mobileMenu = document.querySelector(".mobile-menu");

function menuShow() {
  mobileMenu.style.height = "250px";

  buttonClose.style.display = "block";
  button.style.display = "none";
}

function menuClose() {
  mobileMenu.style.height = "0";
  buttonClose.style.display = "none";
  button.style.display = "block";
}
