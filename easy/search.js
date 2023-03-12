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

var searchWithLoop = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
};

// time complexity: O(n)