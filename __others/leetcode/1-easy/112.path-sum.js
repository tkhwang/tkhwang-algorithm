/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  const dfs = (node, sum, target) => {
    // Base
    if (node == null) return;

    // Recursive
    sum += node.val;

    if (!node.left && !node.right) {
      if (sum === target) {
        found = true;
        return;
      }
    }

    dfs(node.left, sum, target);
    dfs(node.right, sum, target);
  };

  let found = false;
  dfs(root, 0, sum);
  return found;
};
