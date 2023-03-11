/**
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

// - okay runtime, O(n)
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

// - slightly better runtime than searchInsert, still O(n)
// - slightly worse memory usage than searchInsert, but seems to vary