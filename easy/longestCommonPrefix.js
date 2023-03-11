/**
 * given an array of strings (strs), find the longest common prefix amongst the strings
 * if there is no common prefix, return empty string ""
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // if any empty string is included in strs, that is automatically the return
    if (strs.includes("")) {
        return "";
    }

    let prefix = "";    // this will become our longest common prefix, and add chars as needed
    let i = 0;          // this tracks the index of the character for EVERY word in strs
    let currentLetter = strs[0][i]; // starting off with the first character in strs

    // will loop as long as every single word in strs has the character of the given index, i
    while (strs.every(word => word[i] === currentLetter)) {
        // if every letter at index i matches, append that to the prefix string
        prefix += currentLetter;
        // i increments to the next index
        i++;
        // so that the currentLetter can be updated to check in the while condition
        currentLetter = strs[0][i];
        
        // if array strs includes the current prefix string, that means it is the
        // longest common prefix possible, and break the loop
        if (strs.includes(prefix)) break;
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));    // -> "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]));       // -> ""
console.log(longestCommonPrefix(["pine", "pinecone", "pineapple"]));    // -> "pine"
console.log(longestCommonPrefix(["something", "stars", ""]));           // -> ""