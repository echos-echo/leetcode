/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) return 1;  // if there is only one version returns that one bad version
        if (isBadVersion(n) && !isBadVersion(n - 1)) return n;  // checks if the final version is the bad version

        // indices of where to look
        let start = 1;
        let end = n;
        let mid;

        while (start < end) {
            // calculate the midpoint
            mid = Math.floor((start + end) / 2);
            // check if the midpoint is a bad version
            // if it is, check the version immediately before it
            // if the one before it isn't, we've found the first bad version!
            // if the one before it is, move the end index down to the midpoint
            // if the midpoint is not a bad version, move the start index up to the middle
            if (isBadVersion(mid)) {
                if (!isBadVersion(mid - 1)) return mid;
                end = mid;
            } else {
                start = mid;
            }
        }
        return mid;
    };
};

// performance notes:
// - great runtime
// - okay memory usage
// - time complexity: O(log n)