/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
var largestValues = function(root) {
  if (!root) return [];

  const queue = [root];
  const output = [];

  while (queue.length) {
    let max = -Infinity;
    let node;
    let len = queue.length;
    for (let i = 0; i < len; i += 1) {
      node = queue.shift();
      max = Math.max(max, node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    output.push(max);
  }
  return output;
};
