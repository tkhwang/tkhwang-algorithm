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
var maxLevelSum = function(root) {
    const levels = {};
    
    const dfs = (node, level) => {
        if (!node) return;
        
        if (levels[level] === undefined) levels[level] = 0;
        levels[level] += node.val;
        
        dfs(node.left, level + 1)
        dfs(node.right, level + 1);
        
    }
    
    dfs(root, 1);
    
    const values = Object.values(levels);
    
    const m = values.map((v,i) => [ v, i + 1 ]);
    
    m.sort((a,b) => b[0] - a[0] || a[1] - b[1]);
    
    console.log(m);
    
    return m[0][1];
};