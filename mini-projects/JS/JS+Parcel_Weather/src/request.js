export default function asyncRequestWeather(city) {
  city = city === "" || city === null || city === undefined ? "Мурманск" : city;

  let yandexUrlAPI = `https://geocode-maps.yandex.ru/1.x/?apikey=b12fdac4-d030-4c39-8b70-92f922163c9a&geocode=${city}&format=json`;
  fetchDataFromAPI(yandexUrlAPI, (data) => {
    const geo = data.response.GeoObjectCollection.featureMember[0];
    const citySearch = geo.GeoObject.name;
    const pos = geo.GeoObject["Point"].pos
      .split(" ")
      .reverse()
      .map((item) => {
        return Number(item).toFixed(2);
      });
    let $headerCity = document.getElementById("header-city");

    $headerCity = $headerCity != null ? $headerCity.textContent : "";
    console.log($headerCity.length, city.length);

    if ($headerCity != citySearch) {
      let weatherUrlAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${pos[0]}&lon=${pos[1]}&appid=9cf319515242ae7efb08069d26c3c945`;
      fetchDataFromAPI(weatherUrlAPI, (data) => {
        querySelectorAndInsertHTML(
          ".window__header",
          /*html*/ `
              <h2 id="header-city">${citySearch}</h2><h2>${data.sys.country}</h2>
      `
        );
        querySelectorAndInsertHTML(
          ".window__content",
          /*html*/ `
             <img
              id="weather_icon"
              src="https://openweathermap.org/img/wn/${
                data.weather[0].icon
              }@2x.png" alt="${data.weather[0].main}">
            <span id="temperature">${
              Math.floor(data.main.temp - 273.4) + "°C"
            }</span>
            `
        );
        querySelectorAndInsertHTML(
          ".window__footer",
          /*html*/ `
              <br><p>По ощущениям ${
                Math.floor(data.main.feels_like - 273.4) + "°C"
              }</p>
              <p>${data.weather[0].main}, ${data.weather[0].description}</p>
            `
        );
      });
    }
  });

  function querySelectorAndInsertHTML(selector, contentHTML) {
    const element = document.querySelector(selector);
    element.classList.remove("window-show-content");
    setTimeout(() => {
      element.innerHTML = contentHTML;
      element.classList.add("window-show-content");
    }, 300);
  }

  async function fetchDataFromAPI(urlAPI, actions) {
    const response = await fetch(urlAPI);
    const json = await response.json();

    return actions(json);
  }
}
