const zeroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const plusButton = document.querySelector('#plus');
const subButton = document.querySelector('#sub');
const clearButton = document.querySelector('#clear');
const equalButton = document.querySelector('#equal');
const displayValue = document.querySelector('#display-value');
let operand = [];
let currentValue;
let operator;
let answer;

const input = (num) => {
    
    displayValue.textContent = displayValue.textContent + num;
    currentValue = displayValue.textContent; //variable for the numbers when clicked, populate display
    if(typeof operand[0] == 'number') {
        operand[0] = operand[0].toString();
        displayValue.textContent = '';
        displayValue.textContent = displayValue.textContent + num;
        currentValue = displayValue.textContent;
    }
}

const calculation = (op) => {
    if (operand.length > 0 && typeof answer == 'number') {
        operator = op;
        operand.splice(0, 2, Math.round(1000000 * answer)/1000000);
        displayValue.textContent = '';
        answer = undefined;
    } else if(operand.length > 0) {
        if (currentValue == "0" && operator == '/') {
            displayValue.textContent = `Impossible`;
            return;
        }
        currentValue = operate(operator, Number(operand[0]), Number(displayValue.textContent));
        operator = op;
        operand.splice(0, 2, Math.round(1000000 * currentValue)/1000000);
        let trimmedOperand = operand[0].toString().substring(0, 11);
        displayValue.textContent = trimmedOperand;
    } else {
        operator = op;
        operand.push(currentValue);
        displayValue.textContent = '';
    }
}

zeroButton.addEventListener('click', function() {
    input(0);
});

oneButton.addEventListener('click', function() {
    input(1);
});

twoButton.addEventListener('click', function() {
    input(2);
});

threeButton.addEventListener('click', function() {
    input(3);
});

fourButton.addEventListener('click', function() {
    input(4);
});

fiveButton.addEventListener('click', function() {
    input(5);
});

sixButton.addEventListener('click', function() {
    input(6);
});

sevenButton.addEventListener('click', function() {
    input(7);
});

eightButton.addEventListener('click', function() {
    input(8);
});

nineButton.addEventListener('click', function() {
    input(9);
});

divideButton.addEventListener('click', function() {
    calculation('/');
});

multiplyButton.addEventListener('click', function() {
    calculation('*');
});

plusButton.addEventListener('click', function() {
    calculation('+');
});

subButton.addEventListener('click', function() {
    calculation('-');
});

clearButton.addEventListener('click', function() {
    operand = [];
    operator = undefined;
    currentValue = undefined;
    displayValue.textContent = '';
    answer = undefined;
});

equalButton.addEventListener('click', function() {
    if (currentValue == "0" && operator == '/') {
        displayValue.textContent = `Impossible`;
        return;
    }
    operand.push(currentValue);
    answer = Math.round(1000000 * operate(operator, Number(operand[0]), Number(operand[1])))/1000000;
    let trimmedAnswer = answer.toString().substring(0, 11);
    displayValue.textContent = trimmedAnswer;
    currentValue = displayValue.textContent;
    operand.splice(0, 2, answer);
    operator = undefined;
});
    

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (array) => {
    return array.reduce((a,b) => {
        return a * b;
    })
}

const divide = (array) => {
    return array.reduce((a,b) => {
        return a / b;
    })
}

const operate = (opr, a, b) => {
    if(opr === '+') {
        return add(a, b);
    } else if (opr === '-') {
        return subtract(a, b);
    } else if (opr === '*') {
        return multiply([a, b]);
    } else if (opr === '/') {
        return divide([a, b]);
    }
}

