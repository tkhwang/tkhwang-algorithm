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
        if (!node) return root = new TreeNode(val);
        
        if (node.val < val) {
            if (node.right) {
                dfs(node.right, val);
            } else {
                node.right = new TreeNode(val);
                return;
            }
        }
        if (val < node.val) {
            if (node.left) {
                dfs(node.left, val);
            } else {
                node.left = new TreeNode(val);
                return;
            }
        }
    }
    
    dfs(root, val)
    
    return root;
};