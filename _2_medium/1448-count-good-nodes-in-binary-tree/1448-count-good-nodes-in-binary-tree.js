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
var goodNodes = function(root) {
    let result = 0;
    
    const dfs = (node, parent) => {
        if (!node) return;
        
        if (parent <= node.val) result += 1;
        
        dfs(node.left, Math.max(parent, node.val));
        dfs(node.right, Math.max(parent, node.val));
    }
    
    dfs(root, -Infinity);
    
    return result;
};