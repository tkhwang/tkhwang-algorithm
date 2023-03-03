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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    const res = [];
    
    const dfs = (node, parent, sum) => {
        if (!node) return;
        
        sum += node.val;
        if (!node.left && !node.right) res.push(sum);
        
        dfs(node.left, node, sum);
        dfs(node.right, node, sum);
    }
    
    dfs(root, -1, "");
    
    return res.map((v) => parseInt(v, 2)).reduce((a,b) => a + b, 0);    
};