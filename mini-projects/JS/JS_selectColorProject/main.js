function randomizeColor() {
  const hexCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * hexCode.length)];
  }
  return color;
}

function setColor(firstRun) {
  const cols = document.querySelectorAll(".col");
  const colors = firstRun ? getHashFromAddress() : [];

  cols.forEach((item, index) => {
    const icon = item.querySelector("i");
    const headerText = item.querySelector("h2");
    let color = "";
    if (firstRun && colors.length > 1) {
      color = firstRun ? colors[index] : randomizeColor();
    } else {
      color = randomizeColor();
    }
    if (isLocked(icon)) {
      colors.push(headerText.textContent);
      return;
    }

    if (!firstRun) {
      colors.push(color);
    }

    item.style.background = color;

    setText(headerText, color);
    textSetColor(headerText, color);
    textSetColor(icon, color);
  });
  setHashInAddress(colors);
}

function setText(headerText, color) {
  headerText.textContent = color;
}

function isLocked(icon) {
  return icon.classList.contains("fa-lock") ? true : false;
}

function textSetColor(node, color) {
  const luminance = chroma(color).luminance();
  node.style.color = luminance > 0.5 ? "#333" : "ghostwhite";
}

function copyColorText(color) {
  navigator.clipboard.writeText(color);
}

function getHashFromAddress() {
  let hashArr = location.hash
    .substring(1)
    .split("-")
    .map((item) => "#" + item);
  return hashArr;
}

function setHashInAddress(colors) {
  location.hash = colors
    .map((item) => {
      return item.substring(1);
    })
    .join("-");
}

document.addEventListener("keydown", () => {
  setColor();
});

document.addEventListener("click", (event) => {
  const type = event.target.tagName.toLowerCase();
  if (type == "i") {
    event.target.classList.toggle("fa-lock-open");
    event.target.classList.toggle("fa-lock");
  }
  if (type == "h2") {
    let color = event.target.textContent;
    copyColorText(color);
  }
});

setColor(true);