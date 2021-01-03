/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  let lucky = -1;
  let totals = arr.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {});

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === totals[arr[i]]) {
      lucky = Math.max(lucky, arr[i]); 
    }
  }
  return lucky;
};