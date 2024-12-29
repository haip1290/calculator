const operators = document.querySelectorAll("#operators button");
const numbers = document.querySelectorAll("#numbers button");
const equalBtn = document.querySelector("button.equal");
const display = document.querySelector("#display");
const clearBtn = document.querySelector("#clear");
let a, b;
let operator = "";
let isA = true;
let toClear = false;
// add event to display operator
operators.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(`operator:${operator} choice: ${choice.textContent}`);
    if (operator == choice.textContent || b == undefined) {
      toClear = true;
      return;
    }
    operator = choice.textContent;
    isA = false;
    toClear = true;
  });
});
// add event to display numbers
numbers.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (toClear) {
      display.textContent = "";
      toClear = false;
    }
    display.textContent += choice.textContent;
    if (isA) {
      a = display.textContent;
      console.log(`a = ${a}`);
    } else {
      b = display.textContent;
      console.log(`b = ${b}`);
    }
  });
});
// add event to equalBtn
equalBtn.addEventListener("click", () => {
  display.textContent = operate(operator, +a, +b);
  a = +display.textContent;
  b = undefined;
  toClear = true;
});

// add event to clear
clearBtn.addEventListener("click", clearAll);

function clearAll() {
  display.textContent = "";
  a = undefined;
  b = undefined;
  operator = "";
  isA = true;
  toClear = false;
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  console.log(`${a}${operator}${b}`);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      console.error("invalid operator");
      return;
  }
}
