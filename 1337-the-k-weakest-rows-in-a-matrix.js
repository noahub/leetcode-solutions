/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  const sums = mat.reduce((acc, curr, i) => {
    const sum = curr.reduce((a, b) => a + b, 0);
    return [...acc,  [i, sum]]
  }, []);
  
  return sums.sort((a, b) => a[1] - b[1]).splice(0, k).map(s => s[0]);
};