const sumAll = function(Num1, Num2) {
    if ((Number.isInteger(Num1) && Num1 >=0) && (Number.isInteger(Num2) && Num2 >=0)) {
        let arr = [Num1, Num2];
        let sortedArr = arr.sort((a, b) => a - b);
        let firstNum = sortedArr[0];
        let lastNum = sortedArr[1];
        let total = 0;
        for (let i = firstNum; i <= lastNum; i++) {
            total = total + i;
        };
        return total;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
