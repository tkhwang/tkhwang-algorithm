/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function(root) {
  const queue = [root];
  let sum = 0;

  while (queue.length) {
    let node = queue.shift();

    if (node == null) continue;

    if (node.left) {
      queue.push(node.left);
      if (!node.left.left && !node.left.right) sum += node.left.val;
    }

    node.right && queue.push(node.right);
  }

  return sum;
};
