/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const freq = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }

  let keys = Object.keys(freq);
  keys.sort((a, b) => (freq[a] === freq[b] ? a.localeCompare(b) : freq[a] - freq[b]));

  return keys.slice(0, k);
};
