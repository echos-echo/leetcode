/*
2 integer arrays
- nums1
- nums2
@return array of intersection
- each element much be unique
- return result in any order
*/

// [1, 2, 3, 4]
// [2, 4, 6]
// -> [2, 4]

// nums1 = [1, 2, 2, 1]
// nums2 = [2, 2]
// -> [2]

const intersection = (nums1, nums2) => {
    // want to get the elements in nums1 that are also in nums2
    // figure out which array is smaller
    let smallerArray, biggerArray;
    if (nums1.length > nums2.length) {
      biggerArray = nums1;
      smallerArray = nums2;
    } else {
      biggerArray = nums2;
      smallerArray = nums1;
    }
  
    const smallerArrayHashed = new Map();
    // keys = values in smallerArray, values = false
    for (let j = 0; j < smallerArray.length; j++) {
      smallerArrayHashed.set(smallerArray[j], false);
    }
    // iterate through biggerArray -> if value in biggerArray is in smallerArrayHashed
    // value at found key = true
    for (let i = 0; i < biggerArray.length; i++) {
      if (smallerArrayHashed.has(biggerArray[i])) {
        smallerArrayHashed.set(biggerArray[i], true);
      }
    }
    // check values smallerArrayHashed, value != false, we want the key for that value
    const solutionArray = [];
    smallerArrayHashed.forEach((value, key) => {
      if (value) {
        solutionArray.push(key);
      }
    })
  
    // check each element in the smallerArray, if the biggerArray includes it, add to some array
    // smallerArray.forEach(number => {
    //   if (biggerArray.includes(number) && !solutionArray.includes(number)) {
    //     solutionArray.push(number);
    //   }
    // });
    
    return solutionArray;
  }
  
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  const nums3 =  [1, 2, 3, 4]
  const nums4 =  [2, 4, 6];
  const nums5 = [4, 9, 5];
  const nums6 = [9, 4, 9, 8, 4];
  
  console.log(intersection(nums1, nums2));  // -> [2]
  console.log(intersection(nums3, nums4));  // -> [2, 4]
  console.log(intersection(nums5, nums6));  // -> [9, 4]