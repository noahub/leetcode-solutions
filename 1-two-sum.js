/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (const [i, num] of nums.entries()) {
    let complement = target - num;
    let compI = nums.indexOf(complement)
    if (compI >= 0 && compI !== i) {
      return [i, compI]
    }
  }
};