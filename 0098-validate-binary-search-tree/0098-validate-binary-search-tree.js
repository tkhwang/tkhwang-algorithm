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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prv = null;

    const dfs = (node) => {
        if (!node) return true;

        const left = dfs(node.left);

        if (prv) {
            if (!(prv.val < node.val)) return false;
        }
        prv = node;

        const right = dfs(node.right);

        return left && right;
    }

    return dfs(root)
};