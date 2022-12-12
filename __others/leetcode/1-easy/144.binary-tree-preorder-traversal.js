/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = [];
  const traverse = node => {
    if (node === null) return;
    result.push(node.val);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(root);
  return result;
};
