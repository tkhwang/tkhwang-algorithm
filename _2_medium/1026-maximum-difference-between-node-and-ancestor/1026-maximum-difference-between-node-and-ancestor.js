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
    
    const dfs = (node, minSoFar, maxSoFar) => {
        if (!node) return;
        
        const maxDiff = maxSoFar === -Infinity ? 0 : Math.abs(maxSoFar - node.val);
        const minDiff = minSoFar === Infinity ? 0 : Math.abs(minSoFar - node.val);
        const localMax = Math.max(maxDiff, minDiff);
        
        if (max < localMax) max = localMax;

        dfs(node.left,  Math.min(minSoFar, node.val), Math.max(maxSoFar, node.val)); 
        dfs(node.right, Math.min(minSoFar, node.val), Math.max(maxSoFar, node.val));
    }
    
    dfs(root, Infinity, -Infinity);
    
    return max;
};