/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const evens = [];
  const odds = [];
  const result = [];

  A.forEach(item => {
    if (item % 2 === 0) evens.push(item);
    else odds.push(item);
  });

  return evens.concat(odds);
};

// Others
var sortArrayByParity = function(A) {
  let even = A.filter(a => a % 2 === 0);
  let odd = A.filter(a => a % 2 === 1);
  return even.concat(odd);
};
