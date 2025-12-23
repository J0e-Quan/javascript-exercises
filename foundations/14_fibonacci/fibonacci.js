const fibonacci = function(n) {
    let number = Number(n)
    if (number >= 0) {
        let arr = [0, 1]
        for (i = 1; i <= number; i++) {
            let sum = arr[i] + arr[(i-1)]
            arr.push(sum)
        }
        return arr[number]
    } else {
        return "OOPS"
    }

};

// Do not edit below this line
module.exports = fibonacci;
