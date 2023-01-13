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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    const res = [];
    
    const dfs = (node, isLonely) => {
        if (!node) return;

        if (isLonely) res.push(node.val);        
        const isLocalLonely = (node.left && !node.right || !node.left && node.right);

        dfs(node.left, isLocalLonely);
        dfs(node.right, isLocalLonely);
    }
    
    dfs(root, false);
    
    return res;
};