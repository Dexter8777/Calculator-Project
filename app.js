
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
const decimalPoint = document.querySelector('.decimal');

let displayValue = '';
let operator = '';

numButtons.forEach((btn) => {
    btn.addEventListener('click', ()=>{
        displayValue += btn.textContent;
        resultsDisplay.append(btn.textContent);
        decimalPoint.removeAttribute('disabled');
    })
})


decimalPoint.addEventListener('click', ()=>{
    decimalPoint.setAttribute('disabled', '');
    displayValue += '.'
    resultsDisplay.append('.');
})
        


operatorButtons.forEach((btn) => {
    btn.addEventListener('click', ()=>{

        if(btn.id == 'times'){
            operator += '*';
            displayValue += '*';
        } else if (btn.id == 'divide'){
            operator += '/';
            displayValue += '/';
        } else {
            operator += btn.textContent;
            displayValue += btn.textContent;
        }
        
        resultsDisplay.append(btn.textContent);
        decimalPoint.removeAttribute('disabled');
    })
})



// Operate

const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

const operators = {
    '+' : add,
    '-' : subtract,
    '*' : multiply,
    '/' : divide
};

equals.addEventListener('click', ()=>{
    resultsDisplay.replaceChildren();

    // Only append to display if both variables have a value
    if (operator && displayValue){
        resultsDisplay.append(operate(operator, displayValue));
    };
    
    displayValue = '';
    displayValue += resultsDisplay.textContent;
    operator = '';
    decimalPoint.removeAttribute('disabled');
})


clear.addEventListener('click', ()=>{
    resultsDisplay.replaceChildren();
    displayValue = '';
    operator = '';
    decimalPoint.removeAttribute('disabled');
})




const operate = function(ops, displayContent){
    let finalResult = 0;
    let decimalFinalResult;
    // removes all operators leaving only the numbers
    displayContent = displayContent.split(/[\/\+\-\*]/g);
    ops = ops.split('');

    const newNumArray = displayContent.map(num => {
        return parseFloat(num);
    })
   
    /* Loops through each operator using the first operator to perform the calculation
    on the first two numbers,

    Will then remove those first two numbers and append the result of the calculation
    to the start of the list to be used in the next calculation with the next number.
    */
    
    ops.forEach((op) => {
        finalResult = operators[op](newNumArray[0], newNumArray[1])
        newNumArray.splice(0, 2);
        newNumArray.unshift(finalResult);
    });

    if(finalResult.toString().includes('.')){
        decimalFinalResult = finalResult.toString().split('.');
    };

    if (finalResult == 'Infinity'){
        finalResult = 'ERROR';
    } else if(decimalFinalResult[1].length > 3){
        finalResult = finalResult.toFixed(1);
    }
    return finalResult
};


