const findTheOldest = function(array) {
   return array.reduce((oldestPerson, newPerson, index) => {
    if (oldestPerson.yearOfDeath === undefined) {
        oldestPerson.yearOfDeath = new Date().getFullYear();
    } 
    let oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    let newPersonAge = newPerson.yearOfDeath - newPerson.yearOfBirth;
    return oldestPersonAge > newPersonAge ? oldestPerson : newPerson;
   })
};

// Do not edit below this line
module.exports = findTheOldest;
