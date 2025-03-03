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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let min = Infinity;
    
    const dfs = (node) => {
        if (!node) return;
    
        if (Math.abs(min - target) > Math.abs(node.val - target)) {
            min = node.val;
        }
        
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    
    return min;
};