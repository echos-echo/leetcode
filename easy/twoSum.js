/**
 * given array nums and integer target, return the indices of two numbers
 * such that they add up to target
 * - exactly one solution
 * - may not reuse the same number
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let solution = [];
    for (let i = 0; i < nums.length; i++) {
        let holder = target;
        solution.push(i);
        holder -= nums[i];
        solution.push(nums.lastIndexOf(holder));
        if (solution[1] === -1 || solution[0] === solution[1]) {
            solution = [];
            holder = target;
        } else {
            break;
        }
    }
    return solution;
};

// performance notes:
// - poor runtime
// - poor space complexity

console.dir(twoSum([2, 7, 11, 15], 9));     // -> [0, 1]
console.dir(twoSum([3, 2, 4], 6));          // -> [1, 2]
console.dir(twoSum([3, 3], 6));             // -> [0, 1]