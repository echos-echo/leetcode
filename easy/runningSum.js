/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runningSumArray = [];
    nums.reduce((prev, curr) => {
        prev += curr;
        runningSumArray.push(prev);
        return prev;
    }, 0);
    return runningSumArray;
};