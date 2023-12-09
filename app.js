
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
}

const multiply = function(...num){
    const result = num.reduce((previousNum, currentNum) => {
        const total = previousNum * currentNum;
        return total;
    })
    return result;
}

const divide = function(...num){
    const result = num.reduce((previousNum, currentNum) => {
        const total = previousNum / currentNum;
        return total;
    })
    return result;

}

let firstNum;
let operator;
let secondNum;

console.log(add(5, 8));
console.log(subtract(30, 8, 2));
console.log(multiply(2, 4, 4, 2))
console.log(divide(5, 2));