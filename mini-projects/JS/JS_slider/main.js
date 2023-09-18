const $slides = document.querySelector(".slides");
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const slideCount = document.querySelectorAll(".slide").length;
const oneStep = -(100 / slideCount);
const maxStep = oneStep * (slideCount - 1);
let currentStep = 0;

function slidePrev() {
  if (currentStep != 0) {
    currentStep -= oneStep;
  } else {
    currentStep = maxStep;
  }
  $slides.style.transform = `translateX(${currentStep}%)`;
}
function slideNext() {
  if (currentStep > maxStep) {
    currentStep += oneStep;
  } else {
    currentStep = 0;
  }
  $slides.style.transform = `translateX(${currentStep}%)`;
}

$btnPrev.addEventListener("click", slidePrev);
$btnNext.addEventListener("click", slideNext);
