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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const res = [];
    
    const dfs = (node) => {
        if (!node) return [];
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        return [...left, node.val, ...right];
    }
    
    return dfs(root)[k-1];
};