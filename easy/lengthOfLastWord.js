/**
 * given string s, which may or may not contain trailing whitespace,
 * return the length of only the last word in the string (substring of non-space characters)
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
};

// performance notes:
// excellent runtime, poor memory usage