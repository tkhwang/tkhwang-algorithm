/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
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
var averageOfLevels = function(root) {
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
    output.push(averageOfArrays(stage));
  }
  return output;
};

function averageOfArrays(array) {
  let sum = 0;
  for (const value of array) {
    sum += value;
  }
  return sum / array.length;
}
