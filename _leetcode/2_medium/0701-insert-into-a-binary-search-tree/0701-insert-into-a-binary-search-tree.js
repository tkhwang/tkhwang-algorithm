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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const dfs = (node, val) => {
        if (!node) return new TreeNode(val);
        
        if (node.val === val) return node;
        
        if (node.val > val) {
            node.left = dfs(node.left, val);
        } else if (node.val < val) {
            node.right = dfs(node.right, val);
        }
        return node;
    }
    
    return dfs(root, val);
};