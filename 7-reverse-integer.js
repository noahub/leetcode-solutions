/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const upper = Math.pow(2, 31) - 1;
  const lower = Math.pow(-2, 31);
  const sign = Math.sign(x);
  const revnum = String(Math.abs(x)).split('').reverse('').join('');
  const result = sign * Number(revnum);
  return result < upper && result > lower ? result : 0;
};