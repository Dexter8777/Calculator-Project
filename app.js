
const add = function(...num){
    result = num.reduce((previousNum, currentNum) => {
        const total = previousNum + currentNum;
        return total;
    })
    return result;
};

const subtract = function(...num){
    result = num.reduce((previousNum, currentNum) => {
        const total = previousNum - currentNum;
        return total;
    })
    return result;
}

const multiply = function(...num){
    result = num.reduce((previousNum, currentNum) => {
        const total = previousNum * currentNum;
        return total;
    })
    return result;
}

const divide = function(...num){
    result = num.reduce((previousNum, currentNum) => {
        const total = previousNum / currentNum;
        return total;
    })
    return result;

}
console.log(add(5, 8));
console.log(subtract(30, 8, 2));
console.log(multiply(2, 4, 4, 2))
console.log(divide(5, 2));