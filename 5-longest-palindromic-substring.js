/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s == null || s.length < 1) return "";
  let start = 0;
  let end = 0;
  
  for (let i = 0; i < s.length; i++) {
    let length1 = expandFromMiddle(s, i, i);
    let length2 = expandFromMiddle(s, i, i + 1);
    let length = Math.max(length1, length2);
    if (length > (end - start + 1)) {
      if (length === length1) { //is odd
        start = i - Math.floor(length/2);
        end = i + Math.floor(length/2);
      } else { // is even
        start = (i - (length/2)) +1;
        end = (i+1 + (length/2)) -1;
      }
    }
  }
  
  return s.substring(start, end + 1);
};

const expandFromMiddle = function(s, left, right) {
  let l = left;
  let r = right;
  while (l >= 0 && r < s.length && s.charAt(l) == s.charAt(r)) {
    l--;
    r++;
  }
  r = r - 1;
  l = l + 1;
  return r - l + 1;
}