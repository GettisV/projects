const navbar = document.querySelector(".navbar__nav");
const burger_menu = document.querySelector(".navbar__button-burger");

burger_menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
