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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let min = Infinity;
    let prv = null;

    const dfs = (node) => {
        if (!node) return;

        dfs(node.left);

        if (prv !== null) {
            const localDiff = Math.abs(node.val - prv);
            if (localDiff < min) min = localDiff;
        }

        prv = node.val;

        dfs(node.right)
    }

    dfs(root);

    return min;
};