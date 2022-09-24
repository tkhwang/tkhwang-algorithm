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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = [];
    
    const dfs = (path, node, sum) => {
        if (!node) return;
        
        path.push(node.val);
        
        if (sum === node.val && !node.left && !node.right) {
            result.push([...path])
        } else {
            dfs(path, node.left, sum - node.val);
            dfs(path, node.right, sum - node.val);
        }
        
        path.pop();
    }
    
    dfs([], root, targetSum);
    
    return result;
};