/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  const _insert = (node, value) => {
    if (node.val > value) {
      if (node.left) _insert(node.left, value);
      else {
        const newNode = new TreeNode(value);
        node.left = newNode;
        return;
      }
    } else {
      if (node.right) _insert(node.right, value);
      else {
        const newNode = new TreeNode(value);
        node.right = newNode;
        return;
      }
    }
  };
  _insert(root, val);
};
