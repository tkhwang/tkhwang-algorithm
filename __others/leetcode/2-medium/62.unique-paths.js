/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let d = Array(m)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === 0 || j === 0) d[i][j] = 1;
    }
  }

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      d[i][j] += d[i - 1][j];
      d[i][j] += d[i][j - 1];
    }
  }

  console.log(d);
  return d[m - 1][n - 1];
};
