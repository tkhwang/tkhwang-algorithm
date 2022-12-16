/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    const queue = [ root ];
    
    while (queue.length > 0) {
        const len = queue.length;

        const level = [];
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            
            if (!cur) continue;
            
            level.push(cur);
            
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }

        for (let i = 0; i < level.length; i += 1) {
            const curNode = level[i];
            if (i < level.length - 1) {
                const nextNode = level[i+1]
                curNode.next = nextNode;
            } else {
                curNode.next = null;
            }
        }
        
        level.length = 0;
    }
    
    return root;
};