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
    
    const data = [];
    
    const dfs = (node) => {
        if (!node) return;
        
        data.push(node.val);
        
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    
    data.sort((a,b) => a - b);
    
    let min = Infinity;
    
    for (let i = 1; i < data.length; i += 1) {
        const diff = data[i] - data[i-1];
        if (min > diff) min = diff;    
    }
    
    return min;    
};