/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let case1 = 0,
    case2 = 0,
    current = 0;

  for (let i = cost.length - 1; i >= 0; i += 1) {
    current = cost[i] + Math.min(case1, case2);
    case2 = case1;
    case1 = current;
  }
  return Math.min(case1, case2);
};
