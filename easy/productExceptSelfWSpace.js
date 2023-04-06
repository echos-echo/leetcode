/**
 * given an array of nums, return the array with the total product of the values
 * excluding the factor at a current index.
 * - do not use division
 * - complete with O(n) time complexity 
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // two pointers
    // front pointer, back pointer -> the index after the nums[i]
    // product of beginning, product of end -> keeps tracks of products on both sides
    const leftProduct = new Array(nums.length).fill(null);
    const rightProduct = new Array(nums.length).fill(null);
    const solutionArray = new Array(nums.length).fill(null);
    
    // left side product array:
    // - actually checking and multiplying by whatever was at the index before
    // - *means we should never be hitting the last value
    // - at index zero, the default factor is 1 (there is no 'left side')
    for (let i = 0; i < leftProduct.length; i++) {
      if (i === 0) {
        leftProduct[i] = 1;
      } else {
        leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
      }
    }
    // right side product array:
    // - begin from end of array, and calculate product 
    // - index will decrement -> multiplying the previous value, we get the newest product
    // - runs until we hit index 1 (inclusive)
    for (let i = rightProduct.length - 1; i >= 0; i--) {
      if (i === rightProduct.length - 1) {
        rightProduct[i] = 1;
      } else {
        rightProduct[i] = rightProduct[i + 1] * nums[i + 1];
      }
    }
    // solution array:
    // - for loop the length of the solution aray
    // - left[i] * right[i] = solution[i] (setting solution[i] to the product)
    for (let i = 0; i < solutionArray.length; i++) {
      solutionArray[i] = leftProduct[i] * rightProduct[i];
    }
    // return solution array
    return solutionArray;
  };