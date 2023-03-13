/**
 * given an array of numbers and a number val, remove all occurrences of val in-place
 * all occurrences of val should be moved to the end, and the first k numbers should be non-val
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let leftIndex = 0, rightIndex = 1;
    // if rightIndex reaches the end, then all occurrences of val have been accounted for
    while(rightIndex < nums.length) {
        if (nums[leftIndex] === val && nums[rightIndex] !== val) {
            // if the left side is val but the right is not, swap them!
            nums[leftIndex] = nums[rightIndex];
            nums[rightIndex] = val;
            leftIndex++;
        } else if (nums[leftIndex] === val && nums[rightIndex] === val) {
            // if they are both val, right side needs to scooch up a bit
            rightIndex++;
        } else {
            // if the left side is not val at all, both indices will move onward
            leftIndex++;
            rightIndex++;
        }
    }
    // if there is no val to be found in nums, return the length of array as is
    if (nums.indexOf(val) === -1) return nums.length;

    // leftIndex will be one index up from where the last occurrence of val was swapped
    nums.splice(leftIndex);
    // returns the length of the first k elements, with all occurrences of val removed
    return nums.length;
};

// performance notes:
// - great runtime
// - bad memory usage
// - time complexity: O(n log n)