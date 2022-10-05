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
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    
    const dfs = (node, depth) => {
        if (!node) return node;
        
        if (depth === 1) {
            node.left = new TreeNode(val, node.left, null);
            node.right = new TreeNode(val, null, node.right);
            return node;
        }
        
        node.left = dfs(node.left, depth - 1);
        node.right = dfs(node.right, depth - 1);
        return node;
    }
    
    const newRoot = new TreeNode(-1, root);
    dfs(newRoot, depth)
    
    return newRoot.left;
};