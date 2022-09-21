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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    const queue = [ [ root, 0] ];
    const res = [];
    
    while (queue.length) {
        const len = queue.length;
        
        const level = [];
        let depth;
        let cur;
        for (let i = 0; i < len; i += 1) {
            ([ cur, depth ] = queue.shift());
            
            level.push(cur.val);
            
            if (cur.left) queue.push([ cur.left, depth + 1 ]);
            if (cur.right) queue.push([ cur.right, depth + 1 ]);
        }
        if (depth % 2 === 1) level.reverse();
        res.push(level);
    }
    
    return res;
};