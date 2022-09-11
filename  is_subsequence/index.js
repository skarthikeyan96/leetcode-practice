/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  // note : target should be in the same order in source
  // Try re-constructing target to match source

  let leftPointer = 0;
  let rightPointer = 0;
  let count = 0;
  while (leftPointer < s.length && rightPointer < t.length) {
    if (s[leftPointer] === t[rightPointer]) {
      count++;
      leftPointer++;
      rightPointer++;
    } else {
      rightPointer++;
    }
  }

  // if count matches the length of the source string then it is safe to assume that we have // went over the charachters in the source string
  return count === s.length;
};
