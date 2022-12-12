/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  const queue = [root];
  let sum = 0;
  if (root == null) return 0;

  if (root.val < L) return rangeSumBST(root.right, L, R);
  else if (root.val > R) return rangeSumBST(root.left, L, R);
  else return rangeSumBST(root.left, L, R) + root.val + rangeSumBST(root.right, L, R);
};
