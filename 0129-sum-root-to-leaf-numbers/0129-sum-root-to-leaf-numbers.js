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
var sumNumbers = function(root) {
    let res = 0;
    
    const dfs = (sum, node) => {
        if (!node) return;
        
        sum += "" + node.val;
        
        if (!node.left && !node.right) {
            res += Number(sum);
            return;
        }
        
        dfs(sum, node.left);
        dfs(sum, node.right);
    }
    
    dfs("", root);
    
    return res;
};