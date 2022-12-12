/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let d = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(0));
  d[0][0] = grid[0][0];

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (i === 0 && j === 0) continue;

      let up = i > 0 ? d[i - 1][j] : Infinity;
      let left = j > 0 ? d[i][j - 1] : Infinity;

      d[i][j] = Math.min(up, left) + grid[i][j];
    }
  }

  console.log(d);
  return d[grid.length - 1][grid[0].length - 1];
};
