/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const traverse = (array, left, right, target) => {
    if (array.length === 1) {
      if (array[0] === target) return [0, 0];
      else return [-1, -1];
    }

    if (left > right) return [-1, -1];

    let mid = Math.floor(left + (right - left) / 2);

    // Found ond.
    if (array[mid] === target) {
      let less = mid,
        higher = mid;
      while (array[less] === target) {
        less -= 1;
      }
      while (array[higher] === target) {
        higher += 1;
      }
      return [less + 1, higher - 1];
    } else if (array[mid] < target) {
      return traverse(array, mid + 1, right, target);
    } else if (array[mid] > target) {
      return traverse(array, left, mid - 1, target);
    }
  };

  return traverse(nums, 0, nums.length - 1, target);
};
