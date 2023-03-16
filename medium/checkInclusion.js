/**
 * given strings s1 and s2, check if s2 contains any permutation of s1
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // step 1:
    // creates a hash table where we include every letter in s1
    // along with how many times it appears
    const s1Letters = new Map();
    for(let index in s1) {
        const letterToCheck = s1[index]
        if (s1Letters.get(letterToCheck)) {
            // already exists? increment its count by 1
            s1Letters.set(letterToCheck, s1Letters.get(letterToCheck) + 1);
        } else {
            // doesn't exist yet? put it in and set its occurrence value to 1
            s1Letters.set(letterToCheck, 1);
        }
    }

    // part 2:
    // checking s2 for s1
    let left = 0, right = 0, lengthNeeded = s1.length;
    // as long as we haven't reached the end of s2...
    while(right < s2.length) {
        // if we can get a value for the current letter in s2, decrement the length of letters needed
        if (s1Letters.get(s2[right]) > 0) {
            lengthNeeded--;
        }
        // set the current letter and a value in s1Letters
        // if the current letter is not an existing letter in s1Letters it will be fine.
        // the value will end up being undefined and 30-32 will be unable to run even if following
        // occurrences are found
        s1Letters.set(s2[right], s1Letters.get(s2[right]) - 1);
        right++;
        // lengthNeeded reaches 0, that means we've found a permutaiton. huzzah
        if (lengthNeeded === 0) return true;
        // slide window over if difference between right and left reaches maximum length
        if (right - left === s1.length) {
            // needed letters will increment their occurrence and now we need 1 more in lengthNeeded
            if (s1Letters.get(s2[left]) >= 0) {
                lengthNeeded++;
            }
            s1Letters.set(s2[left], s1Letters.get(s2[left]) + 1);
            left++;
        }
    }
    return false
};

// performance notes:
// moderately above average runtime
// average memory usage
