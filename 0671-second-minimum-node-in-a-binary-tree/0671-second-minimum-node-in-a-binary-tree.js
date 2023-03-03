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
var findSecondMinimumValue = function(root) {
    const res = [];
    
    const dfs = (node) => {
        if (!node) return;
    
        dfs(node.left);
        
        res.push(node.val);
        
        dfs(node.right);
    }
    
    dfs(root);
    
    res.sort((a,b) => a - b);
    
    const result = [ res[0] ];

    for (let i = 1; i < res.length; i += 1) {
        if (res[i] === result.at(-1)) continue;
        return res[i];
    }
    return  -1;
};