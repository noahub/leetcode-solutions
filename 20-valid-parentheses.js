/**
 * @param {string} s
 * @return {boolean}
 */
const bracketMapping = {")": "(", "}": "{", "]": "["}
var isValid = function(s) {
  let stack = [];
  for (const char of s) {
    if ( char in bracketMapping) {
      top_element = stack.pop() || '#';
      if (bracketMapping[char] !== top_element) {
        return false
      } 
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};