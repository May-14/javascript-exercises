const removeFromArray = function(array, ...elementsToBeRemoved) {
    array = array.filter(notEqualTo);
    function notEqualTo(elementToCheck) {
        for (element of elementsToBeRemoved) {
            if (elementToCheck === element) {
                return false;
            }
        }
        return true;
    }
    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
