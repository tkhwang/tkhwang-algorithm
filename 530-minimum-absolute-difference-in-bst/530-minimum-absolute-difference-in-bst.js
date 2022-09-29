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
var getMinimumDifference = function(root) {
    
    const result = [];
    
    const dfs = (node) => {
        if (!node) return;
        
        dfs(node.left);
        
        result.push(node.val);
        
        dfs(node.right);
    }
    
    dfs(root);
    let min = Infinity;
    for (let i = 1; i < result.length; i += 1) {
        const diff = result[i] - result[i-1];
        if (min > diff) min = diff;
    }
    return min;
};