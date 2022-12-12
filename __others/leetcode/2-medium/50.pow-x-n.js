/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let temp;

  if (n < 0) return 1 / myPow(x, -n);
  if (n === 0) return 1;
  if (n % 2 === 0) {
    temp = myPow(x, n / 2);
    return temp * temp;
  } else if (n > 0) return x * myPow(x, n - 1);
};
