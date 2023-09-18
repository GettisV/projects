import "./select_style.scss";

export default class Select {
  constructor(selector, options) {
    this.select = document.querySelector(selector);
    this.options = options;

    this.#render(options);
    this.#setup();
  }
  #render(options) {
    select.classList.add("select");
    select.innerHTML = this.template(options);
  }
  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.clickHandlerCloseCombobox = this.clickHandlerCloseCombobox.bind(this);

    select.addEventListener("click", this.clickHandler);
    document.addEventListener("click", this.clickHandlerCloseCombobox);
    this.fillList();
  }
  clickHandlerCloseCombobox(event) {
    const type = event.target.classList;
    if (type.contains("select") == false) {
      this.close();
    }
  }
  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === "select" && this.select.classList.contains("open")) {
      this.close();
    } else {
      this.open();
    }

    if (type === "item") {
      const dataText = this.select.querySelector("[data-text]");
      dataText.innerHTML = event.target.innerHTML;

      const selectedItem = event.target;
      this.select.querySelectorAll(".select__item").forEach((item) => {
        item.classList.remove("selected");
      });
      selectedItem.classList.add("selected");
      this.close();
    }
  }
  open() {
    this.select.classList.add("open");
  }
  close() {
    this.select.classList.remove("open");
  }
  destroy(select) {
    this.select.removeEventListener("click", this.clickHandler);
  }

  fillList() {
    const list = select.querySelector(".select__list");
    this.options.data.forEach((element) => {
      list.innerHTML += /*html*/ `
        <li class="select__item" data-id="${element.id}" data-type="item">${element.value}</li>
      `;
    });
  }

  template(options) {
    return /*html*/ `
      <span data-text>${options.placeholder} </span><i class="fa-solid fa-chevron-down"></i>
      <ul class="select__list"></ul>
    `;
  }
}
