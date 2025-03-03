/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    const ancestors = new Set();
    
    while (p) {
        ancestors.add(p.val);
        p = p.parent;
    }
    
    while (q && !ancestors.has(q.val)) {
        q = q.parent;
    }
    
    return q;
};