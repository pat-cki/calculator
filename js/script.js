// UI variables
const display = document.querySelector('.display'),
  integerButtons = document.querySelectorAll('.integer'), 
  operationsButtons = document.querySelectorAll('.operation'),
  decimalButton = document.querySelector('.decimal'),
  resetButton = document.querySelector('.clear');

//CALCULATOR VARIABLES
let displayedValue = 0,
  firstValue = null,
  operator = null,
  waitingForNext = false;


// INPUT INTEGER FUNCTIONALITY
integerButtons.forEach(button => button.addEventListener(('click'), (event) => {
  inputInteger(event.target.innerHTML);
}));

function inputInteger(int){
  if (displayedValue == '0') {
    displayedValue = int;
  } else { 
    displayedValue = displayedValue + int;
  };
  displayUpdate();
}

// OPERATIONS FUNCTIONALITY
operationsButtons.forEach(button => button.addEventListener(('click'), (event) => {
  console.log(event.target.innerHTML);
}));

// DECIMAL FUNCTIONALITY
decimalButton.addEventListener('click', (event) => {
  addDecimal(event.target.innerHTML);
  displayUpdate();
});

function addDecimal(dot){
  displayedValue += dot;
}

// RESET FUNCTIONALITY
resetButton.addEventListener('click', clearAll);

function clearAll(){
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