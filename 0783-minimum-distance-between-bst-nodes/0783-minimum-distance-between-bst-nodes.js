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
var minDiffInBST = function(root) {
    let precessor = null;
    let min = Infinity;
    
    const dfs = (node) => {
        if (!node) return;

        dfs(node.left);
        
        if (precessor) min = Math.min(min, node.val - precessor.val);
        precessor = node;

        dfs(node.right);
    }
    
    dfs(root);
    
    return min;
};