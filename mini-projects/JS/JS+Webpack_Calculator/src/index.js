("use strict");
import "./styles/main.scss";
import "./materialize";

M.AutoInit();
const $doc = document;
const $input = $doc.getElementById("output_expression");
const $numpadBtn = $doc.querySelectorAll(".btn-floating");
const $numpadEqualBtn = $doc.querySelector("button.equal");
let flagNotify = true;

listenersForButtons();
checkExpressionKeydown();
checkPasteString();

function listenersForButtons() {
  $numpadBtn.forEach((item) => {
    try {
      item.addEventListener("click", (e) => {
        let equal = e.target.dataset.equal;

        //Когда на равно НЕ нажали
        if (!equal) {
          setTimeout(() => {
            validateInput($input.value);
          }, 50);

          $input.value += e.target.textContent.trim();
        }

        //Когда нажали на равно
        if (equal) {
          $input.value = calculateExpression($input.value);
        }
      });
    } catch (error) {
      throw error;
    }
  });
}

function checkExpressionKeydown() {
  $input.addEventListener("keydown", (e) => {
    if (
      (e.key >= 0 && e.key <= 9) ||
      e.key === "." ||
      e.key === "*" ||
      e.key === "/" ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "(" ||
      e.key === ")"
    ) {
      setTimeout(() => {
        validateInput($input.value);
      }, 50);
    }
    if (e.key === "Enter") {
      $input.value = calculateExpression($input.value);
    }
  });
}

function checkPasteString() {
  $input.addEventListener("paste", (e) => {
    setTimeout(() => {
      validateInput($input.value);
    }, 50);
  });
}

function calculateExpression(data) {
  if (data) {
    return new Function(`return ${expressionConversion(data)}`)();
  }
}

function expressionConversion(expression) {
  let resultExpression = "";
  expression.split("").forEach((item) => {
    switch (item.charCodeAt()) {
      case 8901:
      case 215:
        resultExpression += "*";
        break;
      case 43:
        resultExpression += "+";
        break;
      case 8722:
        resultExpression += "-";
        break;
      case 247:
        resultExpression += "/";
        break;
      case 44:
      case 46:
        resultExpression += ".";
        break;
      default:
        resultExpression += item;
    }
  });

  return resultExpression;
}

function validateInput(string) {
  let state = checkSymbolsAndLetters(string) || checkBrackets(string);

  $numpadEqualBtn.disabled = state;
}

function checkBrackets(string) {
  let openBrackets = 0;
  let closeBrackets = 0;
  let state;

  string.split("").forEach((item) => {
    if (item === "(") {
      openBrackets++;
    }
    if (item === ")") {
      closeBrackets++;
    }
  });

  state = openBrackets === closeBrackets ? false : true;
  showNotify(state, `Не соответствие открытых скобок к закрытым`);

  return state;
}

function checkSymbolsAndLetters(string) {
  const regexString = /([\+\−×÷\.\-\+\*\/]{2,})|([A-Za-z]{1,})/;
  const regex = string.match(regexString);

  showNotify(
    regex,
    `Превышено количество знаков или присутствуют сторонние символы`
  );

  return regex;
}

function showNotify(state, text) {
  if (state) {
    if (flagNotify) {
      flagNotify = false;
      setTimeout(() => {
        M.toast({
          html: `${text}`,
        });
        flagNotify = true;
      }, 1000);
    }
  }
}
