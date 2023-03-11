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
    if (nums.includes(target)) return nums.indexOf(target);

    let i = 0;
    while(nums[i] < target) {
        i++;
    }
    return i;
}

// - okay runtime
// - okay memory usage

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertNoWhile = function(nums, target) {
    if (nums.includes(target)) return nums.indexOf(target);

    let index = nums.findIndex(num => num > target)
    return index === -1 ? nums.length : index;
}

// - slightly better runtime than searchInsert, still
// - slightly worse memory usage than searchInsert, but seems to vary
// - if line 29 is removed, the runtime gets worse but the memory usage is much better

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertRecursive = function(nums, target) {
    // if (nums.includes(target)) return nums.indexOf(target);

    // let index = nums.findIndex(num => num > target || num === target)
    // return index === -1 ? nums.length : index;

    if (nums[nums.length - 1] < target) return nums.length;
    if (nums[nums.length - 1] === target) return nums.length - 1;
    if (nums[0] >= target) return 0;
    let midpoint = Math.floor(nums.length / 2);
    if (nums[midpoint] > target) {
        return searchInsert(nums.slice(0, midpoint), target);
    } else if (nums[midpoint] < target) {
        return midpoint + searchInsert(nums.slice(midpoint), target);
    } else {
        return midpoint;
    }
}

// time complexity: O(log n) (?)
// worse memory usage
// but runtime is more or less the same