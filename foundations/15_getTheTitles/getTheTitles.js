const getTheTitles = function(books) {
    let titleArr = []
    for (let book of books) {
        let targetBook = book
        titleArr.push(targetBook["title"])
    }
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
