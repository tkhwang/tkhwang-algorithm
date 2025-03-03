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
    
    const dfs = (left, node, right) => {
        if (!node) return true;
        
        if (!(left < node.val && node.val < right)) return false;

        return dfs(left, node.left, node.val) && dfs(node.val, node.right, right);
    }
    
    return dfs(-Infinity, root, Infinity)
};