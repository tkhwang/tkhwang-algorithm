/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const perm = [],
    perms = [];

  // Sort
  nums.sort((a, b) => a - b);

  _permute(nums, perm, perms);
  return perms;

  function _permute(array, perm, perms) {
    // Base
    if (array.length === 0) {
      perms.push(perm);
      return;
    }

    // Iterate
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === array[i - 1]) continue;
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPerm = perm.concat(array[i]);
      if (perms.includes(newPerm) || perm.includes(newPerm)) continue;
      _permute(newArray, newPerm, perms);
    }
  }
};

m = permuteUnique([1, 1, 2]);
console.log(m);
