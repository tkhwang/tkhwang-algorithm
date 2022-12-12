/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let min = Infinity,
    prev,
    init = false;

  const traverse = node => {
    if (node == null) return;
    // Left
    node.left && traverse(node.left);
    // Self
    if (!init) {
      init = true;
    } else {
      min = Math.min(min, node.val - prev);
    }
    prev = node.val;
    // Right
    node.right && traverse(node.right);
  };

  traverse(root);
  return min;
};
