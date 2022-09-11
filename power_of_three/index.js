/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === -1 || n === 0) return false;

  const num = Math.log10(n) / Math.log10(3);

  if (Number.isInteger(num)) return true;

  return false;
};
