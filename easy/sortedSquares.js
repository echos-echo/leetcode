/**
 * given an array of sorted numbers, return an array in which each value is squared
 * and then sorted
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(num => num ** 2).sort((x, y) => x - y);
};

// performance notes:
// - better than average runtime
// - terrible memory usage
// - time complexity: O(n) (?)

const test1 = [-4,-1,0,3,10];
const test2 = [-7,-3,2,3,11];

console.log(sortedSquares(test1));  // -> [0,1,9,16,100]
console.log(sortedSquares(test2));  // -> [4,9,9,49,121]