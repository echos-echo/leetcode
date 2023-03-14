/**
 * given an array sorted in increasing order, find the index of two numbers such
 * that they add up to the given target.
 * - may not use the same index twice
 * - numbers is 1-indexed
 * - there is exactly one solution
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let index1=0, index2=numbers.length - 1;
    let sum = 0;
    while(index1 < index2) {
        sum = numbers[index1] + numbers[index2];
        if (sum === target) {
            return [index1 + 1, index2 + 1];
        } else if (sum > target) {
            index2--;
        } else {
            index1++;
        }
    }
};

// performance notes:
// runtime highly varies between poor and extremely good
// memory consistently performs at around average or slightly above