/**
 * given an array of nums and a number of steps k, shift the elements of the array
 * k number of steps to the right, where the elements at the end are shifted to the front
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // < O(n) solution 
    // the actual number of steps is the remainder of 
    // the number of steps provided / # of elements in nums
    // let actualSteps = k % nums.length;  
    
    // for each step, remove the last element in nums
    // and then insert it to the front (index-0) of nums
    // while(actualSteps > 0) {
    //   const numberToRotate = nums.pop();
    //   nums.unshift(numberToRotate);
    //   // one step taken, decrement actualSteps
    //   actualSteps--;
    // }

    // O(1) solution
    let indexFromEnd = nums.length - (k % nums.length);
    const secondhalf = nums.splice(indexFromEnd);
    nums.unshift(...secondhalf);
};

// performance notes:
// O(1) solution has good runtime, fantastic memory usage
// O(n) solution runs, but poor runtime, exceed time limit