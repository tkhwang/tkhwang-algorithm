/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  let h = grid.length;
  let w = h && grid[0].length;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] !== "1") continue;
      count++;
      dfs(i, j);
    }
  }

  return count;

  function dfs(n, m) {
    if (n < 0 || m < 0 || n >= h || m >= w) return;
    if (grid[n][m] === "1") {
      grid[n][m] = "X";
      dfs(n + 1, m);
      dfs(n - 1, m);
      dfs(n, m + 1);
      dfs(n, m - 1);
    }
  }
};
