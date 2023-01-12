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
    let res = 0;
    
    const dfs = (node, max) => {
        if (!node) return;
    
        if (max <= node.val) res += 1;
        
        dfs(node.left, Math.max(max, node.val));
        dfs(node.right, Math.max(max, node.val));
        
    }
    
    dfs(root, -Infinity);
    
    return res;
};