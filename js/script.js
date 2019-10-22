// UI variables
const display = document.querySelector('.display'),
  integerButtons = document.querySelectorAll('.integer'), 
  operationsButtons = document.querySelectorAll('.operation'),
  decimalButton = document.querySelector('.decimal'),
  resetButton = document.querySelector('.clear');

integerButtons.forEach(button => button.addEventListener(('click'), (event) => {
  console.log(event.target.innerHTML);
}));
