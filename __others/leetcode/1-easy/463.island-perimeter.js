/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 1) {
        // Left
        if (i === 0 || grid[i - 1][j] === 0) count += 1;
        // Top
        if (j === 0 || grid[i][j - 1] === 0) count += 1;
        // Right
        if (i === grid.length - 1 || grid[i + 1][j] === 0) count += 1;
        // Bottom
        if (j === grid[0].length - 1 || grid[i][j + 1] === 0) count += 1;
      }
    }
  }
  return count;
};
