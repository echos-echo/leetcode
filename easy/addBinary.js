/**
 * given two strings representing numbers in binary, return the sum in binary format as a string
 * 
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sumInDecimal = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    let sumInBinaryString = sumInDecimal.toString(2);
    return sumInBinaryString;
};

// performance notes:
// excellent runtime, excellent memory