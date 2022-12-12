/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  while (queue.length !== 0) {
    let node = queue.pop();
    result.push(node.val);
    const len = node.children.length;
    for (let i = len - 1; i >= 0; i -= 1) {
      queue.push(node.children[i]);
    }
  }
  return result;
};
