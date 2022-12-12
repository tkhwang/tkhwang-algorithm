/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    
    const res = [];
    
    const queue = [ root ];
    
    while (queue.length) {
        const len = queue.length;

        const level = [];
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            
            level.push(cur.val);
            
            for (const next of cur.children) {
                queue.push(next);
            }
        }
        res.push(level);
    }
          
    return res;
};