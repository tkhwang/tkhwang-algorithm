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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const map = { 0: 1 };
    let count = 0;
    
    const dfs = (node, sum) => {
        if (!node) return null;
        
        sum += node.val;
        
        if (map[sum - targetSum] !== undefined) count += map[sum - targetSum];

        map[sum] = (map[sum] || 0) +1;

        dfs(node.left, sum);
        dfs(node.right, sum);

        map[sum] -= 1;
    }
    
    dfs(root, 0);
    
    return count;
};