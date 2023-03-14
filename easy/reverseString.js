/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    s.reverse();
    // let left = 0, right = s.length - 1;
    // let leftChar, rightChar;
    // while (left < right) {
    //     leftChar = s[left];
    //     rightChar = s[right];
    //     s[left] = rightChar;
    //     s[right] = leftChar;
    //     right--;
    //     left++;
    // }
};

// performance notes:
// array method seems to consistently run a little above average
// two pointer method seems to be all over the place, varying between very good and poor performance