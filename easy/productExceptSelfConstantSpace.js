/**
 * given an array of nums, return the array with the total product of the values
 * excluding the factor at a current index.
 * - do not use division
 * - complete with O(n) time complexity 
 * - complete with O(1) extra space (the solution array excluded)
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const solutionArray = new Array(nums.length).fill(null);
    // initalize an empty array with the length of nums
    // make sure to fill it so that it's actually an iterable
    
    // right side product array:
    // - begin from end of array, and calculate product 
    // - index will decrement -> multiplying the previous value, we get the newest product
    // - runs until we hit index 1 (inclusive)
    // - store the right side product directly in solution array
    for (let i = solutionArray.length - 1; i >= 0; i--) {
      if (i === solutionArray.length - 1) {
        // if we have [1, 2, 3, 4]
        //         our index is ^
        // our right side is [] since there is nothing to the right of 4
        // but we still want the product of the right side to be a factor of 1
        // (if we start with 0, the product will ALWAYS be 0)
        solutionArray[i] = 1;
      } else {
        // in this case, there is some value in the right side of the current index
        solutionArray[i] = solutionArray[i + 1] * nums[i + 1];
        // we want to update the current index of the solutionArray with
        // the previous total product of the right side * the value immediately to the right of our index
        // *remember, we want to EXCLUDE the self (current value)
        // solutionArray: [null, null, null, 1]
        //                  our index is ^ or less
        // -> [null, null, (solutionArray[2 + 1] * nums[2 + 1]), 1]
        // -> [null, null, (solutionArray[3] * nums[3]), 1]
        // -> [null, null, (1 * 4), 1]
        // -> [null, null, 4, 1]
      }
    }
    // left side product array -> total product except self in one step:
    // - iterate from start of array
    // - actually checking and multiplying the running product by the previous index value
    // - multiply running product by the right side product stored in the solution array
    // - at index zero, the default multiplication factor is 1 (there is no 'left side')
    let runningLeftProduct = 1;
    // runningLeftProduct keeps track of the total product of the left side so far!
    // it begins at 1 because similar to when we calculated the right side products in solutionArray,
    // there is no "left side" at index 0, and it needs a factor so the product will equal itself
    // note: you could also use a runningProduct to calculate the right side product in the previous loop,
    //       but not doing so saves a teeny tiny bit of memory
    for (let i = 0; i < solutionArray.length; i++) {
      // if nums is [1, 2, 3, 4], solutionArray is [24, 12, 4, 1] by this point
      // feel free to console.log if you want to check
      solutionArray[i] = solutionArray[i] * runningLeftProduct;
      // at i = 0, update solutionArray at 0 to be the current right side product of nums (solutionArray[i]) * runningLeftProduct
      // -> [ 1,  2, 3, 4] (nums)
      //    [24, 12, 4, 1] (you will notice, the value at a given index is the product of everything to the left of nums at that index)
      //      ^ (i = 0)
      // solutionArray[0] * runningLeftProduct (this will be 1 on the first iteration)
      // updates solutionArray -> [(24 * 1), 12, 4, 1]
      runningLeftProduct *= nums[i];
      // update runningLeftProduct so that the next iteration will have the updated product for the left side values of the index
      // so for index i = 1, [1, 2, 3, 4]
      //            our index is ^
      // running product will be (1 (default factor) * 1), calculated by the end of the previous iteration
      // for index i = 2, [1, 2, 3, 4]
      //            our index is ^
      // running product will be (1 (default factor) * 1 * 2), calculated by the end of the previous iteration
      // and so on until the end
    }
    // return solution array
    return solutionArray;
  };