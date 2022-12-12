/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const queue = [root];
  const array = [];

  const traverse = (node, array) => {
    if (node === null) return;
    node.left && traverse(node.left, array);
    array.push(node.val);
    node.right && traverse(node.right, array);
  };

  traverse(root, array);
  return array[k - 1];
};
