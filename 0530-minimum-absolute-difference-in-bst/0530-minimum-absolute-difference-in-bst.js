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
var getMinimumDifference = function(root) {
    let prv = null;
    let min = Infinity;
    
    const dfs = (node) => {
        if (!node) return;
        
        dfs(node.left);
    
        if (prv !== null) {
            const local = Math.abs(node.val - prv);
            if (min > local) min = local;
        }
        
        prv = node.val;
        
        dfs(node.right);        
    }
    
    dfs(root);
    
    return min;
};