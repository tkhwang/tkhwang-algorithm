/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (i * i === num) return true;
  }
  return false;
};

// Others
var isPerfectSquare = function(num) {
  return Number.isInteger(num ** 0.5);
};
