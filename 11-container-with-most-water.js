/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     let maxarea = 0;
//     for (let i = 0; i < height.length; i++) {
//       for (let j = i + 1; j < height.length; j++) {
//         maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j-1) );
//       }
//     }
//     return maxarea;
// };

var maxArea = function(height) {
  let maxarea = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    let HL = height[left];
    let HR = height[right];
    if (HL < HR) {
      maxarea = Math.max(maxarea, HL * (right - left));
      left += 1;
    } else {
      maxarea = Math.max(maxarea, HR * (right - left));
      right -= 1;
    }
  }
  return maxarea;
}
