const modal_overlay = document.querySelector(".modal__overlay");

function actions(event) {
  const node = event.target;
  if (node.classList.contains("btn_for_open_window")) {
    openModal();
  }
  if (
    node.classList.contains("close-modal-window") ||
    node.classList.contains("modal__overlay")
  ) {
    closeModal();
  }
}
function openModal() {
  modal_overlay.classList.add("open");
  setTimeout(() => {
    modal_overlay
      .querySelector(".modal__window")
      .classList.add("animation-window");
  },100)
}
function closeModal() {
  setTimeout(() => {
    modal_overlay
    .querySelector(".modal__window")
    .classList.remove("animation-window");
  }, 0);
  setTimeout(() => {
    modal_overlay.classList.remove("open");
  }, 300);
}

document.addEventListener("click", actions);
