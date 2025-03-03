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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const freq = {};
    
    const dfs = (node) => {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        const sum = node.val + left + right;
              
        freq[sum] = (freq[sum] || 0) + 1;
        
        return sum;
    };
    
    dfs(root)
    
    const keys = Object.keys(freq);
    keys.sort((a,b) => freq[b] - freq[a]);
    
    const result = [];
    for (const key of keys) {
        if (freq[key] === freq[keys[0]]) result.push(key);
    }
    return result;
};