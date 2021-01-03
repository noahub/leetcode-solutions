/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function(nums) {
//   return nums.map(num => num * num).sort((a,b) => a-b);
// };
var sortedSquares = function(nums) {
  let i = 0;
  let j = nums.length - 1;
  let k = nums.length - 1;
  let ans = [];
  while (i <= j) {
    if (Math.abs(nums[i]) <= Math.abs(nums[j])) {
      ans[k] = nums[j] * nums[j];
      j--;
      k--;
    } else {
      ans[k] = nums[i] * nums[i];
      i++;
      k--;
    }
  }
  return ans;
};