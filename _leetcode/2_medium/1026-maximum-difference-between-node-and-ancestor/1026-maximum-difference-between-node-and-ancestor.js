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
var maxAncestorDiff = function(root) {
    let max = -Infinity;
    
    const dfs = (node, uptoMax, uptoMin) => {
        if (!node) return;
        
        if (uptoMax !== -Infinity && uptoMin !== Infinity) {
            const localDiff = Math.max(
                Math.abs(uptoMax - node.val),
                Math.abs(uptoMin - node.val)
            )
            if (max < localDiff) max = localDiff;
        }
        
        dfs(node.left,  Math.max(uptoMax, node.val), Math.min(uptoMin, node.val));
        dfs(node.right, Math.max(uptoMax, node.val), Math.min(uptoMin, node.val));
    }
    
    dfs(root, -Infinity, Infinity);
    
    return max;
};