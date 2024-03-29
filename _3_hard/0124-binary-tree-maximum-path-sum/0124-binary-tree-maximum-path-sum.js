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
        
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));

        max = Math.max(max, left + right + node.val);
        
        return node.val + Math.max(left, right);
    }
    
    dfs(root)
    
    return max;
};