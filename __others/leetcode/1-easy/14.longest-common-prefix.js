/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  let common = "";

  for (let j = 0; j < strs[0].length; j += 1) {
    for (let i = 1; i < strs.length; i += 1) {
      if (strs[0][j] !== strs[i][j]) return common;
    }
    common += strs[0][j];
  }
  return common;
};
