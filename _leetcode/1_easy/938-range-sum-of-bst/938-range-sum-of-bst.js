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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    const dfs = (node) => {
        let sum = 0;
        
        if (!node) return 0;
        if (low <= node.val && node.val <= high) sum += node.val;

        if (low < node.val) sum += dfs(node.left);
        if (node.val < high) sum += dfs(node.right);

        return sum;
    }
    
    return dfs(root)
};