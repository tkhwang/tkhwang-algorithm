/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = [0, 1, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const output = [];

  if (digits.length !== 0) runDFS(0, "", output, map, digits);
  return output;
};

const runDFS = function(index, prefix, output, map, digits) {
  // base
  if (index === digits.length) {
    output.push(prefix);
    return;
  }

  // recursinve
  let letters = map[digits[index]];
  for (let i = 0; i < letters.length; i += 1) {
    runDFS(index + 1, prefix + letters[i], output, map, digits);
  }
};
