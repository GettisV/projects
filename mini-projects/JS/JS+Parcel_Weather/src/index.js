import "./styles/main.scss";
import $app from "./template";
import asyncRequestWeather from "./request";

openInputAndRunRequest();
const $search = document.querySelector(".search");
const $searchInput = $search.querySelector(".search__input");

function openSearchCities() {
  $search.classList.add("show-search");
}
function closeSearchCities() {
  $search.classList.remove("show-search");
}
function checkClassSearchCities() {
  return $search.classList.contains("show-search");
}

function openInputAndRunRequest() {
  let axisY = 0;
  window.addEventListener("mousemove", (event) => {
    axisY = event.screenY;
  });
  setInterval(() => {
    if (axisY < 300) {
      if (!checkClassSearchCities()) {
        openSearchCities();
      }
    }
    if (axisY >= 300) {
      if (checkClassSearchCities()) {
        asyncRequestWeather($searchInput.value);
        closeSearchCities();
      }
    }
  }, 300);
}

asyncRequestWeather("Мурманск");
