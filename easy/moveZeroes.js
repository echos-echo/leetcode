/**
 * given an array nums, move all the 0's to the end while maintaining relative order
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let leftIndex = 0, rightIndex = 1;
    while(rightIndex < nums.length) {
        if (nums[leftIndex] === 0 && nums[rightIndex] !== 0) {
            nums[leftIndex] = nums[rightIndex];
            nums[rightIndex] = 0;
            leftIndex++;
        } else if (nums[leftIndex] === 0 && nums[rightIndex] === 0) {
            rightIndex++;
        } else {
            leftIndex++;
            rightIndex++;
        }
    }
};

