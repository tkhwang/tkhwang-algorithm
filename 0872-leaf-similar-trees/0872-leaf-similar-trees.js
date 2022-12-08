/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leaf1 = [];
    const leaf2 = [];
    
    const dfs = (node, arr) => {
        if (!node) return;
        
        if (!node.left && !node.right) arr.push(node.val);
        
        dfs(node.left, arr);
        dfs(node.right, arr);
    }
    
    dfs(root1, leaf1);
    dfs(root2, leaf2);
    
    return leaf1.length === leaf2.length && leaf1.every((v,i) => leaf2[i] === v);
};