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
    const dfs = (node, leftVal, rightVal) => {
        if (!node) return true;
        
        if (!(leftVal < node.val && node.val < rightVal)) return false;
        
        return dfs(node.left, leftVal, node.val) && dfs(node.right, node.val, rightVal);
    }
    
    return dfs(root, -Infinity, Infinity);
};