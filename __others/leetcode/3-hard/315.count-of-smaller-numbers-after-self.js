/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 *
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/
 *
 * algorithms
 * Hard (37.95%)
 * Likes:    1111
 * Dislikes: 49
 * Total Accepted:    76.8K
 * Total Submissions: 201.3K
 * Testcase Example:  '[5,2,6,1]'
 *
 * You are given an integer array nums and you have to return a new counts
 * array. The counts array has the property where counts[i] is the number of
 * smaller elements to the right of nums[i].
 *
 * Example:
 *
 *
 * Input: [5,2,6,1]
 * Output: [2,1,1,0]
 * Explanation:
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
 *
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i += 1) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] > nums[j]) count += 1;
    }
    result.push(count);
  }
  return result;
};
