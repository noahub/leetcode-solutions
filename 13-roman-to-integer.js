/**
 * @param {string} s
 * @return {number}
 */

const numeralsMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var romanToInt = function(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = numeralsMap[s[i]];
    const next = numeralsMap[s[i+1]];
    if (next) {
      if (next > curr) {
        total += (next - curr);
        i++;
      } else {
        total += curr;
      } 
    } else {
      total += curr;
    }
  }
  return total;
};