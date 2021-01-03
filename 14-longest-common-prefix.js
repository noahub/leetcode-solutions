/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let longest = '';
  if (strs.length < 1) {
    return longest;
  }
  let compare = strs[0];
  if (compare) {
    for (const [i, letter] of [...compare].entries()) {
      for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== letter || i > strs[j].length) {
          return longest;
        }
      }
      longest += letter;
    } 
  }
  return longest;
};