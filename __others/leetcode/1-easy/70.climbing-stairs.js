/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let cache = {};
  cache[1] = 1;
  cache[2] = 2;

  for (let i = 3; i <= n; i++) {
    cache[n] = cache[n - 1] + cache[n - 2];
  }

  return cache[n];
};
