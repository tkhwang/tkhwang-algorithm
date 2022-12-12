/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = "aeiouAEIOU";
  const stack = [];
  let result = "";

  for (let i = 0; i < s.length; i += 1) {
    if (vowels.includes(s[i])) stack.push(s[i]);
  }
  for (let i = 0; i < s.length; i += 1) {
    if (vowels.includes(s[i])) {
      result += stack.pop();
    } else {
      result += s[i];
    }
  }
  return result;
};
