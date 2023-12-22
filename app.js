
// Functions for all basic math operators
const add = function(...num){
    const result = num.reduce((previousNum, currentNum) => {
        const total = previousNum + currentNum;
        return total;
    })
    return result;
};

const subtract = function(...num){
    const result = num.reduce((previousNum, currentNum) => {
        const total = previousNum - currentNum;
        return total;
    })
    return result;
};

const multiply = function(...num){
    const result = num.reduce((previousNum, currentNum) => {
        const total = previousNum * currentNum;
        return total;
    })
    return result;
};

const divide = function(...num){
    const result = num.reduce((previousNum, currentNum) => {
        const total = previousNum / currentNum;
        return total;
    })
    return result;
};

// ----------------------------------------------------------------------

// Display Content

const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const resultsDisplay = document.querySelector('.result-display');

let displayValue = '';
let operator = '';

numButtons.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        displayValue += btn.textContent;
        resultsDisplay.append(btn.textContent);
    })
})

operatorButtons.forEach((btn) => {
    btn.addEventListener('click', ()=>{

        if(btn.id == 'times'){
            operator += '*';
            displayValue += btn.textContent;
        } else if (btn.id == 'divide'){
            operator += '/';
            displayValue += btn.textContent;
        } else {
            operator += btn.textContent;
            displayValue += btn.textContent;
        }
        
        resultsDisplay.append(btn.textContent);
    })
})

// Operate

const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

equals.addEventListener('click', ()=>{
    resultsDisplay.replaceChildren();
    resultsDisplay.append(operate(operator, displayValue));
    displayValue = [];
    operator = [];
})

clear.addEventListener('click', ()=>{
    resultsDisplay.replaceChildren();
    displayValue = [];
    operator = [];
})

const operators = {
    '+' : add,
    '-' : subtract,
    '*' : multiply,
    '/' : divide
};


const operate = function(ops, numbers){
    let finalResult = 0;

    // remove all characters that are not numbers
    numbers = numbers.split(/[^\d]/g);
    ops = ops.split('');

    const newNumArray = numbers.map(num => {
        return Number(num);
    })

    /* Loops through each operator using the first operator to perform the calculation
    on the first two numbers,

    Will then remove those first two numbers and append the result of the calculation
    to be used in the next calculation with the next number.
    */
    
    ops.forEach((op) => {
        finalResult = operators[op](newNumArray[0], newNumArray[1])
        newNumArray.splice(0, 2);
        newNumArray.unshift(finalResult);
    });

    return finalResult;
}

let ops = '+-*/'
ops += '-'
ops = ops.split('');
console.log(ops);



console.log('Operate Function testing\n');
// console.log(operate(operator, firstNum, secondNum));
// console.log(operate('*', firstNum, secondNum));
console.log(operate(['*', '+'], ['2', '3', '5']));
console.log(operate(['+', '-'], ['3', '7', '2']));
console.log(operate(['/', '*', '-', '+'], ['4', '2', '4', '3', '4']));
