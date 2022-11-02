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
    const dfs = (node, parent) => {
        if (!node) return;
        
        node.parent = parent;
        
        dfs(node.left, node);
        dfs(node.right, node);
    }
    
    dfs(root, null);
    
    const ancestors = new Set();
    
    while (p) {
        ancestors.add(p);
        p = p.parent;        
    }
    
    while (!ancestors.has(q)) {
        q = q.parent;
    }
    
    return q;
};