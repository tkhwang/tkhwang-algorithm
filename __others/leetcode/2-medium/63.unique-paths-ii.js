/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(o) {
  const m = o.length;
  const n = o[0].length;

  let d = Array(m)
    .fill(null)
    .map(() => new Array(n).fill(0));

  d[0][0] = 1;

  // for (let i = 0; i < m; i += 1) {
  //   for (let j = 0; j < n; j += 1) {
  //     if (i === 0 || j === 0) d[i][j] = 1;
  //   }
  // }

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (o[i][j] == 1) d[i][j] = 0;
      else {
        if (i > 0) d[i][j] += d[i - 1][j];
        if (j > 0) d[i][j] += d[i][j - 1];
      }
    }
  }

  return d[m - 1][n - 1];
};
