/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root == null) return [];

  const queue = [root],
    output = [];

  while (queue.length > 0) {
    let size = queue.length;
    let stage = [];

    for (let i = 0; i < size; i += 1) {
      let node = queue.shift();
      stage.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    output.push(stage);
  }

  return output.reverse();
};
