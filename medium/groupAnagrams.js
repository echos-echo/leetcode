/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramMap = new Map();
  // hash map -> key - sorted string (of whatever the anagram is), value - [<anagrams>]
  // outer loop - iterate through each word
  for (let i = 0; i < strs.length; i++) {
    let stringSorted = strs[i].split('').sort().join('');
    // ''.split('') -> [] -> [] -> ''
    if (anagramMap.has(stringSorted)) {  // there is already an anagram
      const anagramArray = anagramMap.get(stringSorted);
      anagramArray.push(strs[i]);
      anagramMap.set(stringSorted, anagramArray);
    } else {  // we've found a unique word
      anagramMap.set(stringSorted, [strs[i]]);
    }
  }

  const solution = [];
  anagramMap.forEach((value, key) => {
    solution.push(value);
  })
  return solution;
};