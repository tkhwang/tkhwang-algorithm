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
    let min = 1;
    
    const dfs = (node, depth) => {
        if (!node) return 0;
        
        if (!node.left) return 1 + Math.min(dfs(node.right));
        if (!node.right) return 1 + Math.min(dfs(node.left));
        
        return 1 + Math.min(
            dfs(node.left),
            dfs(node.right)
        )
    }
    
    return dfs(root, 0);
};