
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


let firstNum = 3;
let operator = {
    '+' : add,
    '-' : subtract,
    '*' : multiply,
    '/' : divide
};

let secondNum = 5;


console.log('Operate Function testing\n');
console.log(operate(operator['+'], firstNum, secondNum));
console.log(operate(operator['*'], firstNum, secondNum));
console.log('');

console.log("Simple operator testing")
console.log(add(5, 8));
console.log(subtract(30, 8, 2));
console.log(multiply(2, 4, 4, 2));
console.log(divide(5, 2));