/**
 * given a sorted array of distinct integers. and a target value,
 * return the index if the target value is found.
 * If it is not found, return the index of where it would be if it were inserted in order
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // if the number can be found, the index is returned immediately
    if (nums.includes(target)) return nums.indexOf(target);

    // iterate until there reaches a point that the number at the index is greater than the target
    let i = 0;
    while(nums[i] < target) {
        i++;
    }
    return i;
}

// - okay runtime
// - okay memory usage

/**
 * same as searchInsert, but with code redacted into array functions
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertNoWhile = function(nums, target) {
    // if the number can be found, the index is returned immediately
    if (nums.includes(target)) return nums.indexOf(target);

    let index = nums.findIndex(num => num > target)
    return index === -1 ? nums.length : index;
}

// - slightly better runtime than searchInsert, still
// - slightly worse memory usage than searchInsert, but seems to vary
// - if line 29 is removed, the runtime gets worse but the memory usage is much better

/**
 * same as searchInsert but searches recursively in order to attempt O(log n) time
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertRecursive = function(nums, target) {
    // when the target is greater than the last number, return the length
    if (nums[nums.length - 1] < target) return nums.length;
    // when the target is the last number, return that index
    if (nums[nums.length - 1] === target) return nums.length - 1;
    // when the first number is equal to or greater than the target, return 0 index
    if (nums[0] >= target) return 0;

    // this will be where we slice our array in half
    let midpoint = Math.floor(nums.length / 2);
    if (nums[midpoint] > target) {          // if the midpoint number is greater
                                            // recurse with the first half of the array
        // because we continue searching in the first half of the array, there is no need
        // to increment the return value with the midpoint
        return searchInsert(nums.slice(0, midpoint), target);
    } else if (nums[midpoint] < target) {   // if the midpoint number is less than
                                            // recurse with the second half of the array
        // because we continue searching in the second half of the array, we need to
        // increment the return value (index) with the midpoint we have so far
        return midpoint + searchInsert(nums.slice(midpoint), target);
    } else {    // this is if the midpoint is the exact index of the target is found
        return midpoint;
    }
}

// time complexity: O(log n) (?)
// worse memory usage
// but runtime is more or less the same