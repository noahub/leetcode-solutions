/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let maxwealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    maxwealth = Math.max(maxwealth, accounts[i].reduce((a, b) => a + b, 0))
  }
  return maxwealth;
};