/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // s and t are guaranteed the same length!

    // hash map?
    // at the same position:
    // - store the char in t keyed as the char in s
    // - if that char in s appears again, the corresponding char in t should be the val
    // - return false if not
    // - successfully finishes loop? it's isomorphic

    const mappedLettersS = new Map();
    const mappedLettersT = new Map();
    // loop can either be < s.length or < t.length; they will be the same either way
    for (let i = 0; i < s.length; i++) {
        if (mappedLettersS.has(s[i]) || mappedLettersT.has(t[i])) {  // if we've already seen the letter
            if (mappedLettersS.get(s[i]) !== t[i]) return false;
            if (mappedLettersT.get(t[i]) !== s[i]) return false;
        } else {    // if we've yet to see the letter, add to map
            mappedLettersS.set(s[i], t[i]);
            mappedLettersT.set(t[i], s[i]);
        }
    }
    return true;
};