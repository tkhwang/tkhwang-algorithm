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
var minDepth = function(root) {
    if (!root) return 0;
    
    const queue = [ [ root, 1 ] ];
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            let [ cur, depth ] = queue.shift();
            
            if (!cur.left && !cur.right) {
                return depth;
            }
            
            depth += 1;
            
            if (cur.left) queue.push([ cur.left, depth ]);
            if (cur.right) queue.push([ cur.right, depth ]);
        }
    }
    
    return -1;
};