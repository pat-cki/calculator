// UI variables
const display = document.querySelector(".display"),
  integerButtons = document.querySelectorAll(".integer"),
  operationsButtons = document.querySelectorAll(".operation"),
  decimalButton = document.querySelector(".decimal"),
  resetButton = document.querySelector(".clear");

//CALCULATOR VARIABLES
let displayedValue = 0,
  firstValue = null,
  operator = null,
  waitingForNext = false;

// INPUT INTEGER FUNCTIONALITY
integerButtons.forEach(button =>
  button.addEventListener("click", event => {
    inputInteger(event.target.innerHTML);
  })
);

function inputInteger(int) {
  if (waitingForNext === true) {
    displayedValue = int;
    waitingForNext = false;
  } else {
    if (displayedValue == "0") {
      displayedValue = int;
    } else {
      displayedValue = displayedValue + int;
    }
  }
  displayUpdate();
}

// OPERATIONS FUNCTIONALITY
operationsButtons.forEach(button =>
  button.addEventListener("click", event => {
    calculation(event.target.innerHTML);
    displayUpdate();
  })
);

function calculation(nextOperator) {
  const inputValue = parseFloat(displayedValue);

  if (operator && waitingForNext) {
    operator = nextOperator;
    return;
  }

  if (firstValue === null) {
    firstValue = inputValue;
  } else if (operator) {
    let currentValue = firstValue || 0;
    switch (operator) {
      case "+":
        result = currentValue + inputValue;
        break;
      case "-":
        result = currentValue - inputValue;
        break;
      case "*":
        result = currentValue * inputValue;
        break;
      case "/":
        result = currentValue / inputValue;
        break;
      default:
        result = inputValue;
    }

    displayedValue = String(result);
    firstValue = result;
  }

  waitingForNext = true;
  operator = nextOperator;
}

// DECIMAL FUNCTIONALITY
decimalButton.addEventListener("click", event => {
  addDecimal(event.target.innerHTML);
  displayUpdate();
});

function addDecimal(dot) {
  if (waitingForNext === true) return;
  if (!displayedValue.includes(dot)) {
    displayedValue += dot;
  }
}

// RESET FUNCTIONALITY
resetButton.addEventListener("click", clearAll);

function clearAll() {
  displayedValue = 0;
  firstValue = null;
  waitingForNext = false;
  operator = null;
  displayUpdate();
}

// UPDATE DISPLAY FUNCTIONALITY
function displayUpdate() {
  display.innerHTML = displayedValue;
}

displayUpdate();
