const palindromes = function(string) {
    arrayFromString = string.split("");
    let reverseArray = [];
    let filteredArrayFromString = [];
    arrayFromString.forEach((character, index) => {
        if (character === " " || character === "!" || character === "." || character === "," || character === "?") {
        } else {
            filteredArrayFromString.push(character.toLowerCase());
            reverseArray.unshift(character.toLowerCase());
        }
    })
    let stringFromArray = filteredArrayFromString.join("");
    let reverseStringFromArray = reverseArray.join("");
    if (stringFromArray === reverseStringFromArray) {
        return true;
    } else {
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
