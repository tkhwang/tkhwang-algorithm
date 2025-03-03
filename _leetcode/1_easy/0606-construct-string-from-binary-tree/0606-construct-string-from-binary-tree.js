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
 * @return {string}
 */
var tree2str = function(root) {
    const dfs = (node) => {
        if (!node) return "";

        let res = "" + node.val;

        if (node.left || node.right) {
            res += "(" + dfs(node.left) + ")";
            
            if (node.right) {
                res += "(" + dfs(node.right) + ")"
            }
        }

        return res;
    }
    
    return dfs(root)    
};