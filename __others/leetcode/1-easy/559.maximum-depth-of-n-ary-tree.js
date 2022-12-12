/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
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
 * @return {number}
 */

/*
var maxDepth = function (root) {
*/

var maxDepth = function(root) {
  if (root === null) return 0;

  let queue = [root],
    n = 0;

  while (queue.length !== 0) {
    let queueSize = queue.length;

    for (let i = 0; i < queueSize; i += 1) {
      let node = queue.shift();
      node && node.children && queue.push(...node.children);
    }
    n += 1;
  }
  return n;
};
