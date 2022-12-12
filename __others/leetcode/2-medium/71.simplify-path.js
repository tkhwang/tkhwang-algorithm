/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const arr = path.split("/");
  const stack = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "") continue;
    if (arr[i] === ".") continue;
    if (arr[i] === "..") stack.pop();
    else {
      stack.push(arr[i]);
    }
  }

  return stack.join("/");
};
