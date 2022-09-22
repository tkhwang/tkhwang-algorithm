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
    
    const dfs = (node) => {
        if (!node) return [];
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        return [...left, node.val, ...right];
    }
    
    const result = dfs(root)
    
    console.log(result);
    
    let min = Infinity;
    for (let i = 1; i < result.length; i += 1) {
        const diff = result[i] - result[i-1]
        if (min > diff) min = diff;
    }
    return min;
};