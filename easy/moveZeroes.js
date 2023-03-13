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

// performance notes:
// - above average runtime
// - okay memory usage
// - time complexity: O(log n)

const test1 = [0,1,0,3,12];
const test2 = [0];
const test3 = [0, 0, 1, 2, 0, 4, 6, 0, 11, 14, 16, 20, 0, 22, 0, 0, 100];

moveZeroes(test1);
moveZeroes(test2);
moveZeroes(test3);

console.log(test1); // -> [1, 3, 12, 0, 0]
console.log(test2); // -> [0]
console.log(test3); // -> [1, 2, 4, 6, 11, 14, 16, 20, 22, 100, 0, 0, 0, 0, 0, 0, 0]