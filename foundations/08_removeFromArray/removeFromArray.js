const removeFromArray = function(array, ...others) {
    let commonItems = array.filter((item) => !others.includes(item))
    return commonItems;
};

// Do not edit below this line
module.exports = removeFromArray;
