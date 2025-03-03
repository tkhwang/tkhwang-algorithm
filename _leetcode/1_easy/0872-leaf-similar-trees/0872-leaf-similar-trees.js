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
    const res1 = [];
    const res2 = [];
    
    const dfs = (node, result) => {
        if (!node) return;
        
        dfs(node.left, result);
        
        if (!node.left && !node.right) {
            result.push(node.val);
        }
        
        dfs(node.right, result);
    }
    
    dfs(root1, res1);
    dfs(root2, res2);

    console.log(res1, res2)
    
    return res1.length === res2.length && res1.every((v, i) => v === res2[i]);
    
};