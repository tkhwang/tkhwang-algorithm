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
var sumNumbers = function(root) {
    let result = 0;

    const dfs = (node, sum) => {
        if (!node) return;

        sum += String(node.val);

        if (!node.left && !node.right) result += Number(sum);

        dfs(node.left, sum);
        dfs(node.right, sum);
    }

    dfs(root, "");

    return result;
};