const $app = document.querySelector(".app");

$app.innerHTML = /*html*/ `
  <div class="search">
    <input class="search__input" type="text" placeholder="Введите город...">
  </div>
  <div class="container">
    <div class="row">
      <div class="window">
        <div class="window__header"></div>
        <div class="window__content"></div>
        <div class="window__footer"></div>
      </div>
    </div>
  </div>
`;

export default $app;
