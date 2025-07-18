const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
console.log(buttons);

let calculation = []
let accumulitveCalculation

function calculate(button) {
  const value =button.textContent;
  if( value === "CLEAR"){
    calculation = []
    screenDisplay.textContent = '.'
  } else if ( value === "="){
    console.log(accumulitveCalculation)
    screenDisplay.textContent = eval(accumulitveCalculation)
  } else {
    calculation.push(value)
    accumulitveCalculation = calculation.join('')
    screenDisplay.textContent = accumulitveCalculation
  }
}
buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
