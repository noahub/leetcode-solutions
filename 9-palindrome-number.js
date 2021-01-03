/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     const num = x.toString();
//     return num === num.split('').reverse().join('')
// };

/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
  if (x < 0) {
      return false;
  }
  
  return x === reversedInteger(x);
};

let reversedInteger = function(x) {
  let reversed = 0;
  
  while (x > 0) {
      reversed = (reversed * 10) + (x % 10);
      x = Math.floor(x / 10);
  }
  
  return reversed;
};