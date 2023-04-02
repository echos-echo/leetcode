/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // queue-stack
    const arrayS = s.split(''), arrayT = t.split('');
    while (arrayT.length > 0 && arrayS.length > 0) {
        // check the front
        if (arrayS[0] === arrayT[0]) {  // front letter is the same
            arrayS.shift();
            arrayT.shift();
        } else {    // front letter is different, but still shift out arrayT
            arrayT.shift();
        }
        // check the end
        if (arrayS[arrayS.length - 1] === arrayT[arrayT.length - 1]) {  // last letter is the same
            arrayS.pop();
            arrayT.pop();
        } else {    // last letter is different
            arrayT.pop();
        }
    }
    return arrayS.length === 0; // if there are letters left in arrayS, arrayT did not have the subsequence
};