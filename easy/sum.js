/**
 * given num1 and num2, return the sum
 * 
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function(num1, num2) {
    return num1 + num2;
};

// performance notes:
// - mediocre runtime
// - mediocre memory usage

console.log(sum(1, 2));     // -> 3
console.log(sum(10, 100));  // -> 110
console.log(sum(10, -1));   // -> 9