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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    let prv = null;
    
    const dfs = (node) => {
        if (!node) return;
        
        const right = dfs(node.right);
        const left = dfs(node.left);
        
        node.right = prv;
        node.left = null;
        prv = node;
    }
    
    dfs(root)
};