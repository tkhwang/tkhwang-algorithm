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
var goodNodes = function(root) {
    const dfs = (node, currentMax) => {
        if (!node) return 0;

        if (currentMax <= node.val) {
            return 1 + dfs(node.left, node.val) + dfs(node.right, node.val);
        } else {
            return dfs(node.left, currentMax) + dfs(node.right, currentMax);
        }
    }
    
    return dfs(root, -Infinity)
};