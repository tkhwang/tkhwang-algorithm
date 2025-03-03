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
var maxProduct = function(root) {
    const MOD = 7 + 10 ** 9;
    let total = 0;
    
    const dfs = (node) => {
        if (!node) return;
        
        total += node.val;
        
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    
    console.log(total);
     
    let max = -Infinity;
    
    const dfsSub = (node) => {
        if (!node) return 0;

        const left = dfsSub(node.left);
        const right = dfsSub(node.right);
        
        const sub = node.val + left + right;
        max = Math.max(max, (total - sub) * sub);

        return node.val + left + right;
    }
    
    dfsSub(root, total);
    
    return max % MOD;
};