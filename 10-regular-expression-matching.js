/**
 * @param {string} s - string
 * @param {string} p - pattern
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) {
    return !s;
  }
  
  const first_match = s && (s[0] === p[0] || p[0] === '.');
  if (p.length > 1 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || first_match && isMatch(s.substring(1), p)
  } else {
    return first_match && isMatch(s.substring(1), p.substring(1))
  }
};