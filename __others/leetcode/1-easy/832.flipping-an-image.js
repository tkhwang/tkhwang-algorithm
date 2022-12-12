/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */

/*
Input: [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
 */
var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i += 1) {
    for (let j = 0; j < Math.ceil(A[0].length / 2); j += 1) {
      [A[i][j], A[i][A.length - 1 - j]] = [1 ^ A[i][A.length - 1 - j], 1 ^ A[i][j]];
    }
  }
  return A;
};
