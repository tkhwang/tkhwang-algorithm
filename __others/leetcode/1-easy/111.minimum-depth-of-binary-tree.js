/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function(root) {
  if (root == null) return [];

  let queue = [root],
    depth = 1;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i += 1) {
      let node = queue.shift();
      if (!node.left && !node.right) return depth;
      else {
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
    }
    depth += 1;
  }

  return depth;
};
