/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let l = 0;
  let r = 0;
  let longest = 0;
  
  while (r < s.length) {
    if (!set.has(s.charAt(r))) {
      set.add(s.charAt(r));
      longest = Math.max(longest, set.size);
      r++;
    } else {
      set.delete(s.charAt(l));
      l++;
    }
  }
  return longest;
};