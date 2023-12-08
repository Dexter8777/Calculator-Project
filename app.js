const add = function(...num){
    return num.reduce((previousNum, currentNum) => {
        let total = previousNum + currentNum;
        return total;
    })
};

console.log(add(4, 5, 6, 7));