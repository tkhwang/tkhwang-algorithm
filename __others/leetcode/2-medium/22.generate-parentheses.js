/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];

  const generate = (n, left, right, str) => {
    if (left === n && right === n) result.push(str);
    if (left < n) generate(n, left + 1, right, str + "(");
    if (left > right && right < n) generate(n, left, right + 1, str + ")");
  };

  generate(n, 0, 0, "");
  return result;
};

// #1
var generateParenthesis = function(n) {
  const output = [];
  dfs(0, "", 0, 0, output, n);
  return output;
};

const dfs = (index, prefix, openCount, closeCount, output, n) => {
  // base
  if (index === 2 * n) {
    output.push(prefix);
    return;
  }
  // recursion
  if (openCount < n) dfs(index + 1, prefix + "(", openCount + 1, closeCount, output, n);
  if (openCount > closeCount) dfs(index + 1, prefix + ")", openCount, closeCount + 1, output, n);
};
