/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  if (merged.length % 2) {
    const i = Math.floor(merged.length / 2)
    return merged[i]
  } else if (merged.length > 1) {
    const i = merged.length / 2;
    return (merged[i] + merged[i-1]) / 2;
  } else {
    return merged[0];
  }
};