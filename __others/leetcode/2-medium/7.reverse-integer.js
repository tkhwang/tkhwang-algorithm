/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isPositive = x >= 0 ? true : false;
  let res = "";
  let result = 0;

  if (!isPositive) {
    x *= -1;
  }

  const arr = String(x).split("");
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    res += String(arr[i]);
  }

  result = isPositive ? Number(res) : Number(res) * -1;
  if (result >= Math.pow(2, 31) - 1 || result <= -1 * Math.pow(2, 31)) return 0;
  else return result;
};
