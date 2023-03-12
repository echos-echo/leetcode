/**
 * given an array of nums, remove any duplicates in-place, and the relative order stays the same
 * return is the length of the first k elements that are unique,
 * and everything after the first k elements is irrelevent and should be removed
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = 1;  
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[n-1]) {
            nums[n] = nums[i];
            n++;
        }
    }
    nums.splice(n);
    return nums.length;
};

// performance notes:
// - seems to vary highly for both runtime and memory usage (may be an environment thing)
// - time complexity: O(n) (?)
// - space complexity: O(1)

console.log(removeDuplicates([1,1,2])); // -> 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));   // -> 5