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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let found = null;

    const dfs = (node) => {
        if (!node) return;

        dfs(node.left);

        if (node.val === val) found = node;

        dfs(node.right);
    }

    dfs(root);

    return found;
};