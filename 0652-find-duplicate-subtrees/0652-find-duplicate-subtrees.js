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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const seen = {};
    const res = [];
    
    const dfs = (node) => {
        if (!node) return null;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        const key = `${left}:${right}:${node.val}`;
        // const key = `${node.val}:${left}:${right}`;
        // const key = `${left}:${node.val}:${right}`

        seen[key] = (seen[key] || 0) + 1;
        
        if (seen[key] === 2) res.push(node);
        
        return key;
    }
    
    dfs(root);
    
    return res;  
};