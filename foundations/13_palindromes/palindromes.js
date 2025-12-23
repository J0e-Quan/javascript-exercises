const palindromes = function (string) {
    let originalString = string.toLowerCase()
    let arr = originalString.split("");
    let filteredArr = arr.filter((item => /^[\p{L}\p{N}]$/u.test(item)))
    let originalFilteredString = filteredArr.join("");
    let rra=[]
    for (i = filteredArr.length; i >-1; i--) {
        rra.push(filteredArr[i])
    }
    let reversedString = rra.join("")
    if (originalFilteredString === reversedString) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
