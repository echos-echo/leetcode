/**
 * @param {string} s
 * @return {number}
 */
// solution 1: uses arrays
var lengthOfLongestSubstring = function(s) {
    // stores the letters used so far
    const lettersUsed = [];
    let longest = 0;
    for (const letter in s) {
        if (lettersUsed.includes(s[letter])) {
            // gets the index where the letter was previously found
            // and removes that amount from lettersUsed -> everything before that index is invalid
            lettersUsed.splice(0, lettersUsed.indexOf(s[letter]) + 1);
        } 
        lettersUsed.push(s[letter])
        // only reset longest if the current length of lettersUsed is longer than some previous iteration
        longest = lettersUsed.length > longest ? lettersUsed.length : longest;
    }
    return longest;
};

// solution 2: uses map
var lengthOfLongestSubstringWithMap = function(s) {
    const lettersUsed = new Map();
    let left = 0, right = 0, longest = 0;
    for (const letter in s) {
        // if our map already has the current letter
        if (lettersUsed.has(s[letter])) {
            // left pointer should be where the letter was last seen
            left = Number(lettersUsed.get(s[letter])) < left ? left : Number(lettersUsed.get(s[letter])) + 1;
        }
            // add the letter and its index if it does not exist yet
            lettersUsed.set(s[letter], letter);
        
        right++;
        longest = right - left > longest ? right - left : longest;
    }
    return longest;
};