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
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {

    const res = [];
    
    const dfs = (node) => {
        if (!node) return;
        
        res.push(node.val);
        
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    
    res.sort((a,b) => Math.abs(a - target) - Math.abs(b - target));
    
    return res.slice(0, k);
};