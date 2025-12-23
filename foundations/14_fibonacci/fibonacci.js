const fibonacci = function(n) {
    let number = Number(n)
    let arr = [1, 1,]
    for (i = 1; i <= number; i++) {
        let sum = arr[i] + arr[(i-1)]
        arr.push(sum)
    }
    return arr[number]
};

// Do not edit below this line
module.exports = fibonacci;
