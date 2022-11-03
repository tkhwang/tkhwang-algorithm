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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  
    const dfs = (node, remain) => {
        if (!node) return false;
        
         remain -= node.val;
        
        if (!node.left && !node.right) return remain === 0;
        
        return dfs(node.left, remain) || dfs(node.right, remain);
    }
    
    return dfs(root, targetSum)
};