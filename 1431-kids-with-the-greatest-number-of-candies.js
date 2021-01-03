/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  let results = [];
  for (let i = 0; i < candies.length; i++) {
    results.push((candies[i] + extraCandies) >= max); 
  }
  return results;
};