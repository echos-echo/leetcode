/**
 * given string s, determine if it is valid:
 * - open brackets are closed by the same type of brackets
 * - open brackets must be closed in correct order
 * - ever close bracket has a corresponding open bracket of the same type
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) {
        return false;
    }
    const validOpen = [`(`, `{`, `[`];
    const validClosed = [`)`, `}`, `]`];
    const trackingBrackets = [];
    // there are three bracket types: (), {}, and [], with corresponding indices 0, 1, 2

    const string = s.split('');
    if (validClosed.includes(string[0]) || validOpen.includes(string[s.length - 1])) return false;

    while(string.length > 0) {
        if (validOpen.includes(string[0])) {
            trackingBrackets.push(validOpen.indexOf(string.shift()));
            continue;
        };
        if (string.shift() !== validClosed[trackingBrackets.pop()]) return false;
    }
    if (trackingBrackets.length > 0) return false;
    return true;
};

// performance notes
// - mediocre runtime; O(n)
// - memory usage seems to vary