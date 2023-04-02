/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0, rightSum, pivot = 0;
    rightSum = nums.slice(1).reduce((prev, curr) => {
        return prev + curr;
    }, 0);
    while(pivot < nums.length && leftSum !== rightSum) {
        pivot++;
        leftSum += nums[pivot - 1] || 0;
        rightSum -= nums[pivot] || 0;
    }
    return pivot >= nums.length ? -1 : pivot;
};