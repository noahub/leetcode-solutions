/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const upper = Math.pow(2, 31) - 1;
  const lower = Math.pow(-2, 31);
  let str = '';
  
  for (const char of s.trim()) {
    if ((!isNaN(char) && char !== ' ') || ['+', '-'].includes(char)) {
      if (str.length > 0 && ['+', '-'].includes(char)) {
        break;
      }
      str += char;
    } else {
      if (str.length > 0) {
        break;
      } else {
        str = '0';
        break;
      } 
    }
  }  
  
  const num = Number(str);
  
  if (num < lower) {
    return lower
  }
  if (num > upper) {
    return upper
  }
  
  return isNaN(num) ? 0 : num ;
};

const isValidSymbol = (str) => {
  return str && (['+', '-'].includes(str) || (!isNaN(str) && str !== ' '));
}