/**
 * given an array of digits representing an integer (ie - [1, 2, 3] -> 123),
 * increment the integer represented by 1 and return the resulting array of digits
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastIndex = digits.length - 1;
    let sum = digits[lastIndex] + 1;
    let carryOver = Math.floor(sum / 10);
    digits[lastIndex] = sum % 10;
    if (carryOver === 0) {
        return digits;
    } else {
        lastIndex--;
        while(carryOver !== 0 && lastIndex >= 0){
            sum = digits[lastIndex] + 1
            carryOver = Math.floor(sum / 10);
            digits[lastIndex] = sum % 10;
            lastIndex--;
        }
        if (carryOver !== 0) {
            digits.unshift(1);
        }
        return digits;
    }
};

// performance notes:
// excellent runtime, above average or around average memory usage
// time complexity: O(n) at absolute worst, O(1) at best