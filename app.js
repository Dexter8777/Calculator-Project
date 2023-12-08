
const add = function(...num){
    result = num.reduce((previousNum, currentNum) => {
        let total = previousNum + currentNum;
        return total;
    })
    return result;
};

const subtract = function(...num){
    result = num.reduce((previousNum, currentNum) => {
        let total = previousNum - currentNum;
        return total;
    })
    return result;
}

console.log(add(5, 8));
console.log(subtract(30, 8, 2));