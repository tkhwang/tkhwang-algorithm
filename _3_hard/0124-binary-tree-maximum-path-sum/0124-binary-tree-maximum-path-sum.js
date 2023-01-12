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
var maxPathSum = function(root) {
    let max = -Infinity;
    
    const dfs = (node) => {
        if (!node) return 0;
        
        let left = dfs(node.left);
        left = Math.max(left, 0);
        
        let right = dfs(node.right);
        right = Math.max(right, 0);

        max = Math.max(max, node.val + left + right);
        
        return node.val + Math.max(left, right);
    } 
    
    dfs(root);
    
    return max;
};