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
var minDepth = function(root) {
    let min = Infinity;
    
    const dfs = (node, depth) => {
        if (!node) return;
        
        if (!node.left && !node.right) {
            if (min > depth) min = depth
        }
        
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
    
    dfs(root, 1);
    
    return min === Infinity ? 0 : min;
};