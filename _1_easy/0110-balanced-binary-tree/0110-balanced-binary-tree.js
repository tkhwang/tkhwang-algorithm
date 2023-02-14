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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let res = true;
    
    const dfs = (node) => {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);

        if (Math.abs(left - right) > 1) res = false;
        
        return Math.max(left, right) + 1;
    }
    
    dfs(root);
    
    return res;
};