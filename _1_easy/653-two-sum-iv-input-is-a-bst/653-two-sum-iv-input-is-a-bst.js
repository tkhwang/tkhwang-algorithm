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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const result = [];
    
    const dfs = (node) => {
        if (!node) return;
        
        dfs(node.left);
        
        result.push(node.val);
        
        dfs(node.right);
    }
    
    dfs(root)
    
    const hash = {}
    for (const [i, num] of result.entries()) {
        if (hash[k - num] === undefined) {
            hash[num] = i
        } else {
            return true;
        }
    }
    return false;
};