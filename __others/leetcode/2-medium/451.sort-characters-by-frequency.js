/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const freq = {};
  let keys,
    result = "";

  for (let i = 0; i < s.length; i += 1) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }

  // keys = Object.keys(freq);
  // keys.sort((a, b) => freq[b] - freq[a]);

  // for (let i = 0; i < keys.length; i += 1) {
  //   for (let j = 0; j < freq[keys[i]]; j += 1) {
  //     result += keys[i];
  //   }
  // }

  Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .forEach(v => {
      for (let i = 0; i < freq[v]; i += 1) {
        result += v;
      }
    });

  return result;
};
