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
var deepestLeavesSum = function(root) {
    const queue = [ [root, 0] ];
    let maxDepth = -Infinity;
    
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const [ cur, depth ] = queue.shift();
            if (maxDepth < depth) maxDepth = depth;
            
            if (cur.left) queue.push([cur.left, depth + 1]);
            if (cur.right) queue.push([ cur.right, depth + 1]);
        }
    }
    
    queue.push([ root, 0 ]);
    let sum = 0;
    
    while (queue.length) {
        const len = queue.length; 
        
        for (let i = 0; i < len; i += 1) {
            const [ cur, depth ] = queue.shift();
            
            if (depth === maxDepth) sum += cur.val;
            
            if (cur.left) queue.push([ cur.left, depth + 1 ]);
            if (cur.right) queue.push([ cur.right, depth + 1 ]);
        }
    }
    return sum;
};