/**
 * given integer x, return true if it is a palindrome and false otherwise
 * bonus: do it without converting to a string!
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;    // if x is negative, automatically not a palindrome
    let len = Math.floor(Math.log10(x)) + 1;    // gets the length of the number x

    // if the number is two or more digits long and it ends with a zero, 
    // it cannot be a palindrome
    if (x % (10 ** (len - 1)) === 0 && len >= 2) return false;

    let start = x;  // we start off with the number signifying x, the input value
    let newNum = 0; // newNum will be the presumed 'palindrome' we will calculate
    // while there is a length left of start (representing x)
    while (len > 0) {
        // this calculates the digit in place (ones, tens, hundreds, thousands, etc),
        // and we will add that value to newNum
        let add = (start % 10) * (10 ** (len - 1));
        if (add !== 0) {
            newNum += add;
        }
        // now divide by 10 to chop off the most recently added digit in place
        start = Math.floor(start / 10);
        len--;  // length decrements so eventually the length of start will hit 0
    }
    return newNum === x;
};