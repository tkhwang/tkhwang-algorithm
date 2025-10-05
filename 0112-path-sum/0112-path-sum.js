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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let found = false;

    const dfs = (node, sum) => {
        if (!node) return;

        sum += node.val;

        if (!node.left && !node.right) {
            if (sum === targetSum) found = true;
        }

        dfs(node.left, sum);
        dfs(node.right, sum);
    }

    dfs(root, 0)

    return found;
};