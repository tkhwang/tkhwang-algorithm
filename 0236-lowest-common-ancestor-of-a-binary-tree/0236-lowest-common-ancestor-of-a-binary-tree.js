/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res = null;
    
    const dfs = (node, p, q) => {
        if (!node) return false;
        
        const left = dfs(node.left, p, q);
        const right = dfs(node.right, p, q);
        
        const mid = node === p || node === q;
        
        if (mid + left + right >= 2) res = node;

        return mid || left || right;
    }
    
    dfs(root, p, q)
    
    return res;
};