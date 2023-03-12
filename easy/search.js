/**
 * given array of integers nums and a target number, find the index at which target appears.
 * if target does not exist, return -1
 * bonus: O(log n) time complexity 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// first attempt
var search = function(nums, target) {
    return nums.indexOf(target);
};

// time complexity: O(n)
// fantastic runtime, bad memory usage

// uses a for loop
var searchWithLoop = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
};

// using recursion to divide and conquer
var searchWithRecursion = function(nums, target) {
    let midpoint = Math.floor(nums.length/2);
    if (nums[midpoint] === target) {
        return midpoint;
    } else if (nums.length <= 1) {
        return -1;
    } else if (nums[midpoint] > target) {
        return search(nums.slice(0, midpoint), target);
    } else if (nums[midpoint] < target) {
        let searchIndex = search(nums.slice(midpoint), target);
        return searchIndex === -1 ? -1 : midpoint + searchIndex;
    } 
};

// time complexity: O(log n)
// consistently above average runtime, sometimes decent memory use