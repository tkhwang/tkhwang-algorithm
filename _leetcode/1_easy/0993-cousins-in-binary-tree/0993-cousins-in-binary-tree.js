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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const obj = {};
    
    const dfs = (node, parent, depth) => {
        if (!node) return;
        
        if (node.val === x || node.val === y) obj[node.val] = [ depth, parent ];
        
        dfs(node.left, node, depth + 1);
        dfs(node.right, node, depth + 1);
    }
    
    dfs(root, -1, 0);
    
    if (obj[x][0] !== obj[y][0]) return false;
    
    return obj[x][1] !== obj[y][1]
};