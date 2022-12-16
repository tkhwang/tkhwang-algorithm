/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];
    
    const dfs = (node) => {
        if (!node) return;
        
        res.push(node.val);
        
        for (const next of node.children) {
            dfs(next);
        }
    }
    
    dfs(root);
    
    return res;
};