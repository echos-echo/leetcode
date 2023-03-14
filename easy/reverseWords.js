/**
 * string s contains words; reverse the characters in each word while preserving word order
 * 
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sAsArray = s.split(' ');
    let wordsReversed = sAsArray.map(word => word.split('').reverse().join(''));
    return wordsReversed.join(' ');
};

// performance notes:
// better than average runtime, terrible memory usage