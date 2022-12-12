/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  const euclidLength = point => {
    return Math.sqrt(point[0] * point[0] + point[1] * point[1]);
  };
  return points.sort((a, b) => euclidLength(a) - euclidLength(b))[0];
};
