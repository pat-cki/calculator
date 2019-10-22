// UI variables
const display = document.querySelector('.display'),
  integerButtons = document.querySelectorAll('.integer'), 
  operationsButtons = document.querySelectorAll('.operation'),
  decimalButton = document.querySelector('.decimal'),
  resetButton = document.querySelector('.clear');

// INPUT INTEGER FUNCTIONALITY
integerButtons.forEach(button => button.addEventListener(('click'), (event) => {
  console.log(event.target.innerHTML);
}));

// OPERATIONS FUNCTIONALITY
operationsButtons.forEach(button => button.addEventListener(('click'), (event) => {
    console.log(event.target.innerHTML);
}));


// DECIMAL FUNCTIONALITY
decimalButton.addEventListener('click', (event) => {
    console.log(event.target.innerHTML);
});


// RESET FUNCTIONALITY
resetButton.addEventListener('click', (event) => {
    console.log(event.target.innerHTML);
});
