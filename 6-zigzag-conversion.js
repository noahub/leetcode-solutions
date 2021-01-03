/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let zigzagArray = [];
  let direction = 'down';
  let row = 1;
  
  if (numRows === 1) {
    return s;
  }
  
  for (const char of s) {
    zigzagArray[row - 1] = zigzagArray[row - 1] ? 
      zigzagArray[row - 1] + char : char;  
    if (direction === 'down') {
      if (row < numRows) {
        row++;
      } else {
        direction = 'up';
        row --;
      }
    } else {
      if (row > 1) {
        row--
      } else {
        direction = 'down'
        row++;
      }
    }
    
  }
  return zigzagArray.join('');
};