"use strict";
// Declare the required elements
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
// Add event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});
// Add event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!firstOperand) {
            firstOperand = parseFloat(display.value);
            currentOperator = button.textContent;
            display.value = '';
        }
    });
});
// Add event listener for equals button
equalsButton.addEventListener('click', () => {
    if (!firstOperand || !currentOperator)
        return;
    secondOperand = parseFloat(display.value);
    let result;
    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                alert('Division by zero is not allowed!');
                return;
            }
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    display.value = result.toString();
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
});
// Add event listener for clear button
clearButton.addEventListener('click', () => {
    display.value = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
});
