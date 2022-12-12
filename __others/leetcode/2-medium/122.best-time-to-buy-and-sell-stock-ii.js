/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i += 1) {
    const possibleProfit = prices[i + 1] - prices[i];
    profit = Math.max(profit + possibleProfit, profit);
  }
  return profit;
};
