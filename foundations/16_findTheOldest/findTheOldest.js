const findTheOldest = function(people) {
    people.forEach((person) => {
        let DoB = person.yearOfBirth
        let DoD = person.yearOfDeath
        if (DoD !== undefined) {
            person.Age = (DoB - DoD)
            delete person.yearOfBirth
            delete person.yearOfDeath
            let sortedPeople = people.sort((a, b) => a - b)
            return sortedPeople[-1]
        } else {

        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
