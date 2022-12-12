/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null || root.length === 0) return [];

  const result = [];
  const path = String(root.val);
  dfs(root, path, result);
  return result;
};

const dfs = (node, path, result) => {
  // Base
  if (!node) return;

  // Recursion
  if (!node.left && !node.right) result.push(path);

  node.left && dfs(node.left, path + "->" + node.left.val, result);

  node.right && dfs(node.right, path + "->" + node.right.val, result);
};
