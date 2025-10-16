/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let minDiff = Infinity;
    let minValue = null;

    const dfs = (node) => {
        if (!node) return;

        dfs(node.left);

        const diff = Math.abs(node.val - target);
        if (diff < minDiff) {
            minDiff = diff;
            minValue = node.val;
        }

        dfs(node.right);
    }

    dfs(root);

    return minValue;
};