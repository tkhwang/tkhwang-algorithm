/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function(root) {
  const result = [];
  const traverse = node => {
    if (node === null) return;
    node.left && traverse(node.left);
    result.push(node.val);
    node.right && traverse(node.right);
  };
  traverse(root);
  return result;
};
